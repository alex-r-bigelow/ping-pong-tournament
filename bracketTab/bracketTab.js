// import * as d3 from 'd3';
import jQuery from 'jquery';

import template from './template.html';
import './style.scss';

function setup () {
  jQuery('#bracketTab').html(template);
}

function renderBracket () {
  // TODO
}

function render () {
  if (window.GLOBALS.NOW < window.GLOBALS.POOL_PLAY_DEADLINE) {
    jQuery('#bracketTab svg').hide();
    jQuery('#bracketTab .waitMessage').show();
    jQuery('#bracketTab .deadline').text(window.GLOBALS.POOL_PLAY_DEADLINE.toLocaleString());
  } else {
    jQuery('#bracketTab svg').show();
    jQuery('#bracketTab .waitMessage').hide();
    renderBracket();
  }
}

export default {
  setup,
  render
};
