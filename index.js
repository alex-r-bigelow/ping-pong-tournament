import * as d3 from 'd3';
import './style.scss';
import './scrollbars.scss';

let ANIMATION_SPEED = 1000;

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

function setup () {
  d3.select('#signupButton').on('click', () => {
    showRegistration(true);
  });
  d3.select('#registrationScreen .close.button').on('click', () => {
    hideRegistration(true);
  });
  hideRegistration(false);
}

setup();
