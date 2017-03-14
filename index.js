import * as d3 from 'd3';
import jQuery from 'jquery';

import './style/style.scss';
import makeSelectMenu from './style/makeSelectMenu';
import utahCharities from './utahCharities.csv';

let ANIMATION_SPEED = 1000;
let GOOGLE_API_KEY = 'AIzaSyB4PhN3YiK4yubSYqNwOY9uIWs4TY0ktAs';
let BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
let SPREADSHEET_ID = '1xplN0dfgYruhL8IuG0T8TyrsBOXM-He9sQK075b-tR0';

function hideRegistration (animate) {
  let registrationScreen = d3.select('#registrationScreen');
  if (animate) {
    registrationScreen = registrationScreen.transition(ANIMATION_SPEED);
  }
  registrationScreen
    .style('opacity', 0);
  registrationScreen.transition()
    .style('display', 'none');
}

function showRegistration (animate) {
  let registrationScreen = d3.select('#registrationScreen')
    .style('display', null);
  if (animate) {
    registrationScreen = registrationScreen.transition(ANIMATION_SPEED);
  }
  registrationScreen
    .style('opacity', 1);
}

function updatePlayOrBet () {
  if (d3.select('#willPlay').property('checked')) {
    d3.selectAll('.charityElement').style('display', null);
    d3.select('#betSelector').style('display', 'none');
  } else {
    d3.selectAll('.charityElement').style('display', 'none');
    d3.select('#betSelector').style('display', null);
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

function populatePlayerLists () {
  let dummyData = [
    {
      'name': 'Choose a Player',
      'charity': ''
    },
    {
      'name': 'Chris Johnson',
      'charity': 'UNITED STATES FUND FOR UNICEF',
      'bets': 57,
      'wins': 7,
      'losses': 0
    },
    {
      'name': 'Greg Jones',
      'charity': 'DOCTORS WITHOUT BORDERS USA INC/MEDECINS SANS FRONTIERES USA INC',
      'bets': 4,
      'wins': 4,
      'losses': 3
    }
  ];

  ['#playerA', '#playerB', '#bet'].forEach(containerSelector => {
    let container = d3.select(containerSelector);
    let options = container.selectAll('li').data(dummyData);
    let optionsEnter = options.enter().append('li');
    optionsEnter.append('span')
      .attr('class', 'name');
    optionsEnter.append('span')
      .attr('class', 'charity');
    options = options.merge(optionsEnter);

    options.attr('id', d => d.name)
      .attr('class', d => d.name === 'Choose a Player' ? 'selected' : null);
    options.select('.name')
      .text(d => d.name);
    options.select('.charity')
      .text(d => d.charity);

    makeSelectMenu(container.node());
  });
}

function setup () {
  d3.select('#signupButton').on('click', () => {
    showRegistration(true);
  });
  d3.select('#registrationScreen .close.button').on('click', () => {
    hideRegistration(true);
  });
  d3.selectAll('#willPlay, #willBet').on('change', () => {
    updatePlayOrBet();
  });
  updatePlayOrBet();
  hideRegistration(false);
}

function delayedSetup () {
  populateCharityList();
  populatePlayerLists();
}

setup();
window.onload = delayedSetup;
