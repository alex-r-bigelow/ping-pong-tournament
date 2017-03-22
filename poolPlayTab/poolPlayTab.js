import * as d3 from 'd3';
import jQuery from 'jquery';

import generalUtils from '../generalUtils';

import template from './template.html';
import './style.scss';

const CELL_SIZE = 80;

function setup () {
  d3.select('#poolPlayTab').html(template);
}

function getCloseBounds (element) {
  let bounds = {};
  Array.from(element.children).forEach(childElement => {
    let childBounds = childElement.getBoundingClientRect();
    bounds.left = Math.min(bounds.left || childBounds.left, childBounds.left);
    bounds.top = Math.min(bounds.top || childBounds.top, childBounds.top);
    bounds.right = Math.max(bounds.right || childBounds.right, childBounds.right);
    bounds.bottom = Math.max(bounds.bottom || childBounds.bottom, childBounds.bottom);
  });
  bounds.width = bounds.right - bounds.left;
  bounds.height = bounds.bottom - bounds.top;
  return bounds;
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
  let poolPlayTabElement = poolPlayTab.node();
  let containerBounds = poolPlayTabElement.getBoundingClientRect();
  let svg = poolPlayTab.select('svg');

  // Create groups for each pool
  let poolGroups = svg.selectAll('.poolGroup').data(d3.values(pools));
  poolGroups.exit().remove();
  let poolGroupsEnter = poolGroups.enter()
    .append('g').classed('poolGroup', true);
  poolGroups = poolGroupsEnter.merge(poolGroups);

  poolGroups.attr('transform', 'rotate(-45)');

  // Draw labels for each row / column
  let xLabels = poolGroups.selectAll('.xLabel').data(players => players.slice(1).reverse());
  xLabels.exit().remove();
  let xLabelsEnter = xLabels.enter()
    .append('text').classed('xLabel', true);
  xLabels = xLabelsEnter.merge(xLabels);

  xLabels.text(d => d)
    .attr('text-anchor', 'end')
    .attr('x', -3 * CELL_SIZE / 4)
    .attr('transform', 'rotate(90)')
    .each(function (d, i) {
      let players = d3.select(this.parentElement).datum();
      d3.select(this)
        .attr('y', (i - (players.length - 2)) * CELL_SIZE);
    });

  let yLabels = poolGroups.selectAll('.yLabel').data(players => players.slice(0, players.length - 1));
  yLabels.exit().remove();
  let yLabelsEnter = yLabels.enter()
    .append('text').classed('yLabel', true);
  yLabels = yLabelsEnter.merge(yLabels);

  yLabels.text(d => d)
    .attr('x', function () {
      let players = d3.select(this.parentElement).datum();
      return (players.length - 1.25) * CELL_SIZE;
    }).attr('y', (d, i) => i * CELL_SIZE);

  // Draw a cell for each pairing in the pool
  let matchCells = poolGroups.selectAll('.matchCell').data(players => {
    let pairings = [];
    players.forEach((player1, y) => {
      players.slice(y + 1).forEach((player2, x) => {
        let match = generalUtils.getAllMatches(player1, player2)[0];
        let winner = match ? generalUtils.computeWinner(match) : null;
        pairings.push({
          player1,
          player2,
          x: x + y,
          y,
          winner
        });
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
  // Draw an arrow to indicate the winner; by default it points to player1
  matchCellsEnter.append('path')
    .attr('d', 'M' + CELL_SIZE / 3 + ',0' +
               'L' + (-CELL_SIZE / 3) + ',0' +
               'L' + (-CELL_SIZE / 9) + ',' + (-CELL_SIZE / 6) +
               'L' + (-CELL_SIZE / 9) + ',' + (CELL_SIZE / 6) +
               'L' + (-CELL_SIZE / 3) + ',0Z');
  matchCells = matchCellsEnter.merge(matchCells);

  matchCells.attr('transform', d => {
    let transform = 'translate(' + (CELL_SIZE * d.x) + ',' + (CELL_SIZE * d.y) + ')';
    if (d.winner === null) {
      transform += ' rotate(45)';
    } else if (d.winner === d.player1) {
      transform += ' rotate(180)';
    } else if (d.winner === d.player2) {
      transform += ' rotate(90)';
    }
    return transform;
  }).classed('noScores', d => d.winner === null)
    .classed('withScores', d => d.winner !== null);
  matchCells.select('circle')
    .attr('r', CELL_SIZE / 2);
  matchCells.on('click', d => {
    if (d.winner === null) {
      generalUtils.enterScore(d.player1, d.player2, 'Pool Play');
    }
  });

  // Lay out each pool like text
  let currentX = 0;
  let currentY = 0;
  let maxBottom = 0;
  let maxRight = 0;
  poolGroups.each(function () {
    let rawBounds = getCloseBounds(this);
    // Push to the next line if we've run out of space (newline-esque)
    if (currentX + rawBounds.width > containerBounds.width) {
      currentX = 0;
      currentY = maxBottom;
    }
    let xOffset = currentX - (rawBounds.left - containerBounds.left) - poolPlayTabElement.scrollLeft;
    let yOffset = currentY - (rawBounds.top - containerBounds.top) - poolPlayTabElement.scrollTop;
    d3.select(this).attr('transform', 'translate(' + xOffset + ',' + yOffset + ') rotate(-45)');
    currentX += rawBounds.width;
    maxRight = Math.max(maxRight, currentX);
    maxBottom = Math.max(maxBottom, currentY + rawBounds.height);
  });

  svg.attr('width', maxRight)
    .attr('height', maxBottom);
}

function render () {
  if (window.GLOBALS.NOW >= window.GLOBALS.SIGNUP_DEADLINE) {
    jQuery('#poolPlayTab svg').show();
    jQuery('#poolPlayTab .waitMessage').hide();
    renderPools();
  } else {
    jQuery('#poolPlayTab svg').hide();
    jQuery('#poolPlayTab .waitMessage').show();
    jQuery('#poolPlayTab .deadline').text(window.GLOBALS.SIGNUP_DEADLINE.toLocaleString());
  }
}

export default {
  setup,
  render
};
