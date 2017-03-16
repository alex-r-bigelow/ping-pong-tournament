import * as d3 from 'd3';
import jQuery from 'jquery';

import template from './template.html';
import './style.scss';

const CELL_SIZE = 80;

function setup () {
  d3.select('#poolPlayTab').html(template);
}

function renderPools () {
  let pools = {};
  window.GLOBALS.DATA.Pools.contents.forEach(poolAssignment => {
    if (!pools[poolAssignment.Pool]) {
      pools[poolAssignment.Pool] = [];
    }
    pools[poolAssignment.Pool].push(poolAssignment.Player);
  });

  let poolPlayTab = d3.select('#poolPlayTab');
  let bounds = poolPlayTab.node().getBoundingClientRect();
  let svg = poolPlayTab.select('svg');

  let poolGroups = svg.selectAll('.poolGroup').data(d3.values(pools));
  poolGroups.exit().remove();
  let poolGroupsEnter = poolGroups.enter()
    .append('g').classed('poolGroup', true);
  poolGroups = poolGroupsEnter.merge(poolGroups);

  // Draw a cell for each pairing in the pool
  let matchCells = poolGroups.selectAll('.matchCell').data(players => {
    let pairings = [];
    players.forEach((player1, y) => {
      players.slice(y + 1).forEach((player2, x) => {
        pairings.push({ player1, player2, x: x + y, y });
      });
    });
    return pairings;
  });
  matchCells.exit().remove();
  let matchCellsEnter = matchCells.enter()
    .append('g').classed('matchCell', true);
  matchCellsEnter.append('circle');
  let matchCellsEnterText = matchCellsEnter.append('text');
  matchCellsEnterText.append('tspan')
    .attr('y', '-0.25em')
    .text('Enter');
  matchCellsEnterText.append('tspan')
    .attr('y', '0.75em')
    .attr('x', '0em')
    .text('Scores');
  matchCells = matchCellsEnter.merge(matchCells);

  matchCells.attr('transform', d => {
    return 'translate(' + (CELL_SIZE * d.x) + ',' + (CELL_SIZE * d.y) + ')';
  });
  matchCells.select('circle')
    .attr('r', CELL_SIZE / 2);

  svg.attr('width', bounds.width)
    .attr('height', bounds.height);
}

function render () {
  if (window.GLOBALS.NOW >= window.GLOBALS.SIGNUP_DEADLINE) {
    jQuery('svg').show();
    jQuery('#poolPlayTab .waitMessage').hide();
    renderPools();
  } else {
    jQuery('svg').hide();
    jQuery('#poolPlayTab .waitMessage').show();
    jQuery('#poolPlayTab .deadline').text(window.GLOBALS.SIGNUP_DEADLINE.toLocaleString());
  }
}

export default {
  setup,
  render
};
