import * as d3 from 'd3';
import googleSheetsFakeDb from './googleSheetsFakeDb';
import generalUtils from './generalUtils';
import utahCharities from './utahCharities.csv';

function updatePlayOrBet () {
  if (d3.select('#willPlay').property('checked')) {
    d3.select('#signupForm').style('display', null);
    d3.select('#betForm').style('display', 'none');
  } else {
    d3.selectAll('#signupForm').style('display', 'none');
    d3.select('#betForm').style('display', null);
  }
}

function populateCharityList () {
  d3.csv(utahCharities, results => {
    let options = d3.select('#charityList').selectAll('option').data(results);
    options = options.enter().append('option')
      .merge(options);
    options.text(d => d['CHARITY NAME']);
  });
}

function setup () {
  // Charity list
  populateCharityList();

  // People select menu
  generalUtils.populatePlayerLists('#bet');

  // Radio buttons
  d3.selectAll('#willPlay, #willBet').on('change', () => {
    updatePlayOrBet();
  });
  updatePlayOrBet();

  // Submission buttons
  d3.select('#signupButton').on('click', function () {
    // TODO: validate that the input is valid
    googleSheetsFakeDb.submitForm('Players', this.parentElement.parentElement);
    // TODO: re-render everything when the promise resolves
  });
  d3.select('#betButton').on('click', function () {
    // TODO: validate that the input is valid
    googleSheetsFakeDb.submitForm('Bets', this.parentElement.parentElement);
    // TODO: re-render everything when the promise resolves
  });
}

function render () {
  // TODO
}

export default {
  setup,
  render
};
