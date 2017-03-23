import jQuery from 'jquery';

import playersFormInfo from './formDetails/players.json';
import matchesFormInfo from './formDetails/matches.json';
import betsFormInfo from './formDetails/bets.json';

const FORM_INFO = {
  Players: playersFormInfo,
  Matches: matchesFormInfo,
  Bets: betsFormInfo
};

const GOOGLE_API_KEY = 'AIzaSyB4PhN3YiK4yubSYqNwOY9uIWs4TY0ktAs';
const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
const SPREADSHEET_IDS = {
  Players: '1UejuxSpU6KpdM6CNOYZbCXibQjoPRZYoe5mi90PVEkQ',
  Matches: '1jr2TPZZuel4a_GXESjXV2BQ3BJF6gddeqdZhWWuk2gQ',
  Bets: '1lQGqlgqd8qjTJ0aWDbnsNMQBFfw0r2MkG9Hm42vRKwY',
  Pools: '19CbQRuJjktp1fcM3vXf0KcnEXi4oEP3vm7aV8u49aWI',
  Bracket: '1wEeq9AHyBOza-FsHXuV7GYqXt_c5vakA6r1RGJaJ9dE'
};

function getTable (tableName) {
  return new Promise((resolve, reject) => {
    jQuery.ajax({
      // Google nicely crops our query to the size of the actual data... so we can
      // request a huge number, but we'll only get back what exists
      url: BASE_URL + SPREADSHEET_IDS[tableName] + '/values/A1:ZZ1000000',
      data: {
        key: GOOGLE_API_KEY
      },
      success: result => {
        // first row is the header; convert the rest to dicts
        let cleanedResult = [];
        let headers = result.values[0];
        result.values.forEach((row, index) => {
          if (index > 0) {
            let rowObj = {};
            row.forEach((value, colIndex) => {
              let header = headers[colIndex] || colIndex;
              rowObj[header] = value;
            });
            cleanedResult.push(rowObj);
          }
        });
        resolve({
          contents: cleanedResult,
          headerOrder: headers
        });
      },
      error: reject
    });
  });
}

function submitForm (tableName, formElement) {
  formElement = jQuery(formElement);

  let data = {};

  Object.keys(FORM_INFO[tableName].fields).forEach(originalName => {
    let googleName = FORM_INFO[tableName].fields[originalName];
    let domElement = formElement.find('[name="' + originalName + '"]')[0];
    data[googleName] = domElement.value === undefined ? domElement.textContent : domElement.value;
  });

  return new Promise((resolve, reject) => {
    // This code actually always triggers an Access-Control-Allow-Origin
    // error, but we don't care: the data winds up in the spreadsheet, and
    // it doesn't really matter whether we get the google form html page back
    // (so error should resolve, not reject)
    try {
      jQuery.ajax({
        url: FORM_INFO[tableName].actionUrl,
        data,
        type: 'POST',
        dataType: 'xml',
        success: resolve,
        error: resolve
      }).done(() => {
        resolve();
      }).fail(() => {
        resolve();
      }).always(() => {
        resolve();
      });
    } catch (e) {
      resolve();
    }
  }).catch(() => {});
}

export default {
  getTable,
  submitForm
};
