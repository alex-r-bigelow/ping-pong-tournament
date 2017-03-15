import * as d3 from 'd3';
import jQuery from 'jquery';
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

function validateSignupForm () {
  let name = d3.select('#name').property('value');
  let charity = d3.select('#charity').property('value');
  if (name && charity) {
    return Promise.resolve();
  } else {
    if (!name) {
      d3.select('#name').classed('error', true);
    }
    if (!charity) {
      d3.select('#charity').classed('error', true);
    }
    return Promise.reject();
  }
}

function validateBetForm () {
  if (d3.select('#bet').property('value') !== 'Choose a Player') {
    return Promise.resolve();
  } else {
    d3.select('#bet').classed('error', true);
    return Promise.reject();
  }
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
    generalUtils.handleSubmission(validateSignupForm, 'Players', this.parentElement.parentElement);
  });
  d3.select('#betButton').on('click', function () {
    generalUtils.handleSubmission(validateBetForm, 'Bets', this.parentElement.parentElement);
  });

  // Update sign up status
  if (window.GLOBALS.NOW < window.GLOBALS.SIGNUP_DEADLINE) {
    jQuery('.cantSignup').hide();
    jQuery('#signupDeadline').text(window.GLOBALS.SIGNUP_DEADLINE.toLocaleString());
  } else {
    jQuery('.canSignup').hide();
    d3.select('#willPlay').property('disabled', true);
    d3.select('#willBet').property('checked', true);
    updatePlayOrBet();
  }
}

function render () {
  // TODO
}

export default {
  setup,
  render
};
