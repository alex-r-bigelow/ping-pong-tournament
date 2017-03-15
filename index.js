import jQuery from 'jquery';
import * as d3 from 'd3';

import generalUtils from './generalUtils';
import googleSheetsFakeDb from './googleSheetsFakeDb';

// Make jQuery / d3 accessible from the console
window.jQuery = jQuery;
window.d3 = d3;

import signupTab from './signupTab';
import './style/style.scss';

window.GLOBALS = {
  SIGNUP_DEADLINE: new Date('Mar 24, 2017, 23:59'),
  POOL_PLAY_DEADLINE: new Date('Apr 5, 2017, 23:59'),
  NOW: new Date(),
  DATA: {}
};

function updateTabs () {
  let startingTab = '#signupTab';
  if (window.GLOBALS.NOW >= window.GLOBALS.SIGNUP_DEADLINE) {
    startingTab = '#poolPlayTab';
  } else if (window.GLOBALS.NOW >= window.GLOBALS.POOL_PLAY_DEADLINE) {
    startingTab = '#bracketTab';
  }

  let currentHash = window.location.hash || startingTab;

  jQuery('.tab').hide();
  jQuery(currentHash).show();

  jQuery('nav').find('.button').each((index, element) => {
    if (element.getAttribute('href') === currentHash) {
      element.setAttribute('class', 'selected button');
    } else {
      element.setAttribute('class', 'button');
    }
  });
}

function delayedSetup () {
  generalUtils.populateLeaderBoard();
  signupTab.setup();
  updateTabs();
  generalUtils.showSpinner(false);
}

function getAllTables () {
  let tableNames = ['Players', 'Matches', 'Bets', 'Pools', 'Bracket'];
  Promise.all(tableNames.map(googleSheetsFakeDb.getTable)).then(tables => {
    tableNames.forEach((tableName, index) => {
      window.GLOBALS.DATA[tableName] = tables[index];
    });
  }).then(delayedSetup);
}

window.onhashchange = updateTabs;
window.onload = getAllTables;
