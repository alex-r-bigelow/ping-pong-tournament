import jQuery from 'jquery';
import * as d3 from 'd3';

import generalUtils from './generalUtils';
import googleSheetsFakeDb from './googleSheetsFakeDb';

// Make jQuery / d3 accessible from the console
window.jQuery = jQuery;
window.d3 = d3;

import signupTab from './signupTab/signupTab';
import poolPlayTab from './poolPlayTab/poolPlayTab';
import bracketTab from './bracketTab/bracketTab';
import statsTab from './statsTab/statsTab';

import './style/style.scss';

window.GLOBALS = {
  SIGNUP_DEADLINE: new Date('Mar 24, 2017, 23:59'),
  POOL_PLAY_DEADLINE: new Date('Apr 5, 2017, 23:59'),
  NOW: new Date(),
  DATA: {}, // this will be populated in getAllTables()
  DEBUG_MODE: false  // set to true to try out different states from the UI
};

function setupDebugging () {
  if (window.GLOBALS.DEBUG_MODE) {
    // Debugging: testing other states
    jQuery('#debug').show();
    if (window.localStorage.getItem('debuggingDate')) {
      window.GLOBALS.NOW = new Date(window.localStorage.getItem('debuggingDate'));
      jQuery('#currentTest').text('Simulating ' + window.GLOBALS.NOW);
    }
    jQuery('#clearTests').on('click', () => {
      window.localStorage.removeItem('debuggingDate');
      window.location.reload();
    });
    jQuery('#testSignupExpiration').on('click', () => {
      window.localStorage.setItem('debuggingDate', window.GLOBALS.SIGNUP_DEADLINE);
      window.location.reload();
    });
    jQuery('#testPoolPlayExpiration').on('click', () => {
      window.localStorage.setItem('debuggingDate', window.GLOBALS.POOL_PLAY_DEADLINE);
      window.location.reload();
    });
  }
}

function updateTabs () {
  let startingTab = '#signupTab';
  if (window.GLOBALS.NOW >= window.GLOBALS.SIGNUP_DEADLINE) {
    startingTab = '#poolPlayTab';
  }
  if (window.GLOBALS.NOW >= window.GLOBALS.POOL_PLAY_DEADLINE) {
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

  signupTab.render();
  poolPlayTab.render();
  bracketTab.render();
  statsTab.render();
}

function immediateSetup () {
  setupDebugging();
  getAllTables();
}

function getAllTables () {
  let tableNames = ['Players', 'Matches', 'Bets', 'Pools', 'Bracket'];
  Promise.all(tableNames.map(googleSheetsFakeDb.getTable)).then(tables => {
    tableNames.forEach((tableName, index) => {
      window.GLOBALS.DATA[tableName] = tables[index];
    });
  }).then(delayedSetup);
}

function delayedSetup () {
  generalUtils.populateLeaderBoard();
  signupTab.setup();
  poolPlayTab.setup();
  bracketTab.setup();
  statsTab.setup();
  updateTabs();
  generalUtils.showSpinner(false);
}

window.onhashchange = window.onresize = updateTabs;
window.onload = immediateSetup;
