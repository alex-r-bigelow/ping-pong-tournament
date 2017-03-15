import jQuery from 'jquery';
import * as d3 from 'd3';

// Make jQuery / d3 accessible from the console
window.jQuery = jQuery;
window.d3 = d3;

import signupTab from './signupTab';

import './style/style.scss';

function updateTabs () {
  let currentHash = window.location.hash || '#signupTab';

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
  signupTab.setup();

  updateTabs();
}

window.onhashchange = updateTabs;
window.onload = delayedSetup;
