import * as d3 from 'd3';

import './style/style.scss';
import makeSelectMenu from './style/makeSelectMenu';
import utahCharities from './utahCharities.csv';

import googleSheetsFakeDb from './googleSheetsFakeDb';

// const ANIMATION_SPEED = 1000;

function updatePlayOrBet () {
  if (d3.select('#willPlay').property('checked')) {
    d3.select('#signupForm').style('display', null);
    d3.select('#betForm').style('display', 'none');
  } else {
    d3.selectAll('#signupForm').style('display', 'none');
    d3.select('#betForm').style('display', null);
  }
}

function setupSignInScreen () {
  d3.selectAll('#willPlay, #willBet').on('change', () => {
    updatePlayOrBet();
  });
  updatePlayOrBet();

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

  ['#bet'].forEach(containerSelector => {
    let container = d3.select(containerSelector);
    let options = container.selectAll('li').data(dummyData);
    let optionsEnter = options.enter().append('li');
    optionsEnter.append('span')
      .attr('class', 'name');
    optionsEnter.append('span')
      .attr('class', 'charity');
    options = options.merge(optionsEnter);

    options.attr('id', d => d.name)
      .attr('value', d => d.name)
      .attr('class', d => d.name === 'Choose a Player' ? 'selected' : null);
    options.select('.name')
      .text(d => d.name);
    options.select('.charity')
      .text(d => d.charity);

    makeSelectMenu(container.node());
  });
}

function delayedSetup () {
  setupSignInScreen();
  populateCharityList();
  populatePlayerLists();
}

window.onload = delayedSetup;
