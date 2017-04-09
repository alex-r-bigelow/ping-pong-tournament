import * as d3 from 'd3';
import jQuery from 'jquery';

import generalUtils from '../generalUtils';

import template from './template.html';
import './style.scss';

const CELL_SIZE = 80;
const CELL_PADDING = 20;

function setup () {
  jQuery('#bracketTab').html(template);
}

function constructBracket () {
  let bracket = window.GLOBALS.BRACKET = {
    lookup: {},
    nodes: [],
    seedLookup: {},
    numPlayers: window.GLOBALS.DATA.Bracket.contents.length
  };
  bracket.treeDepth = Math.ceil(Math.log2(bracket.numPlayers));

  let lastLayer = [];

  // Populate the bottom layer with each player, sorted by
  // the player's seed
  window.GLOBALS.DATA.Bracket.contents
    .sort((a, b) => parseInt(a.Seed) - parseInt(b.Seed))
    .forEach(seed => {
      bracket.lookup[seed.Player] = bracket.nodes.length;
      let newNode = {
        id: seed.Player,
        type: 'LEAF',
        favorite: null,
        underdog: null,
        round: bracket.treeDepth,
        winner: seed.Player,
        hidden: false
      };
      lastLayer.push(newNode);
      bracket.nodes.push(newNode);
      bracket.seedLookup[seed.Player] = parseInt(seed.Seed);
    });
  // Add additional autowin nodes until the layer is full
  while (bracket.nodes.length < Math.pow(2, bracket.treeDepth)) {
    let id = 'autowin' + bracket.nodes.length;
    bracket.lookup[id] = bracket.nodes.length;
    let newNode = {
      id,
      type: 'AUTOWIN',
      favorite: null,
      underdog: null,
      round: bracket.treeDepth,
      winner: null,
      hidden: true
    };
    lastLayer.push(newNode);
    bracket.nodes.push(newNode);
  }

  // Fill in all the match nodes
  for (let round = bracket.treeDepth - 1; round >= 0; round -= 1) {
    let newLayer = [];
    for (let i = 0; i < lastLayer.length / 2; i += 1) {
      let favoriteNode = lastLayer[i];
      let underdogNode = lastLayer[lastLayer.length - i - 1];

      let id = '(' +
        (favoriteNode.winner || favoriteNode.id) +
        ' vs ' +
        (underdogNode.winner || underdogNode.id) +
        ')';
      bracket.lookup[id] = bracket.nodes.length;
      favoriteNode.parent = underdogNode.parent = id;

      let newNode = {
        id,
        type: 'MATCH',
        favorite: favoriteNode.id,
        underdog: underdogNode.id,
        round,
        winner: null,
        hidden: favoriteNode.winner === null || underdogNode.winner === null
      };

      if (underdogNode.type === 'AUTOWIN') {
        newNode.winner = favoriteNode.winner;
      } else if (favoriteNode.winner !== null && underdogNode.winner !== null) {
        let match = generalUtils.getAllMatches(favoriteNode.winner, underdogNode.winner)
          .filter(m => parseInt(m.Round) === round)[0];
        if (match) {
          newNode.winner = generalUtils.computeWinner(match);
        }
      }

      newLayer.push(newNode);
      bracket.nodes.push(newNode);
    }

    lastLayer = newLayer;
  }

  // Finally, determine where each node goes (use normalized [-1, 1] scales
  // to map to arbitrary window height/width later in renderBracket).
  // Because we built the tree from leaves to root, reversing guarantees
  // that every parent's position will be defined by the time we get to the
  // children
  for (let i = bracket.nodes.length - 1; i >= 0; i -= 1) {
    let node = bracket.nodes[i];
    let parent = bracket.nodes[bracket.lookup[node.parent]];

    if (node.round === 0) {
      // The root node goes in the center
      node.x = 0;
      node.y = 0;
      node.ySpan = 2.0;
    } else {
      // Figure out x position based on round number and whether
      // the node is feeding into the favorite or underdog side of
      // the tree

      // Figure out the y coordinate and space for children based on its
      // parent's y coordinate and space for children

      let xOffset = node.round / bracket.treeDepth;
      if (node.round === 1) {
        // The final two go to the left and right, based on favorite and
        // underdog, respectively
        if (parent.favorite === node.id) {
          node.x = -xOffset;
          node.y = 0;
          node.ySpan = 2.0;
        } else {
          node.x = xOffset;
          node.y = 0;
          node.ySpan = 2.0;
        }
      } else {
        // A deeper node can simply check if its parent is to the left
        // or right of the middle to determine which side it's on
        if (parent.x < 0) {
          node.x = -xOffset;
        } else {
          node.x = xOffset;
        }

        // It can also simply divide the vertical space
        if (parent.favorite === node.id) {
          node.y = parent.y - parent.ySpan / 4;
          node.ySpan = parent.ySpan / 2;
        } else {
          node.y = parent.y + parent.ySpan / 4;
          node.ySpan = parent.ySpan / 2;
        }
      }
    }
  }
}

function renderBracket () {
  if (!window.GLOBALS.BRACKET) {
    constructBracket();
  }
  let bracket = window.GLOBALS.BRACKET;

  let bracketTab = d3.select('#bracketTab');
  let bracketTabElement = bracketTab.node();
  let containerBounds = bracketTabElement.getBoundingClientRect();
  let bounds = {
    width: Math.max(containerBounds.width, (CELL_SIZE + CELL_PADDING) * (bracket.treeDepth * 2 - 1)),
    height: Math.max(containerBounds.height, (CELL_SIZE + CELL_PADDING) * Math.pow(2, bracket.treeDepth - 1))
  };
  let svg = bracketTab.select('svg')
    .attrs(bounds);

  let xPosition = d3.scaleLinear()
    .domain([-1, 1])
    .range([
      (CELL_SIZE + CELL_PADDING) / 2,
      bounds.width - (CELL_SIZE + CELL_PADDING) / 2
    ]);
  let yPosition = d3.scaleLinear()
    .domain([-1, 1])
    .range([
      (CELL_SIZE + CELL_PADDING) / 2,
      bounds.height - (CELL_SIZE + CELL_PADDING) / 2
    ]);

  let nodes = svg.select('#nodes').selectAll('g')
    .data(bracket.nodes);
  nodes.exit().remove();
  let nodesEnter = nodes.enter()
    .append('g').classed('matchCell', true);
  nodesEnter.append('circle');
  let nodesEnterText = nodesEnter.append('text');
  nodesEnterText.append('tspan')
    .classed('firstName', true)
    .attr('y', '-0.25em');
  nodesEnterText.append('tspan')
    .classed('lastName', true)
    .attr('y', '0.75em')
    .attr('x', '0em');
  nodes = nodesEnter.merge(nodes);

  nodes.attr('transform', d => {
    return 'translate(' + xPosition(d.x) + ',' + yPosition(d.y) + ')';
  }).classed('noScores', d => d.winner === null)
    .classed('withScores', d => d.winner !== null)
    .classed('hidden', d => d.hidden);
  nodes.select('circle')
    .attr('r', CELL_SIZE / 2);
  nodes.select('.firstName')
    .text(d => d.winner ? generalUtils.splitName(d.winner).firstName : 'Enter');
  nodes.select('.lastName')
    .text(d => d.winner ? generalUtils.splitName(d.winner).lastName : 'Scores');
  nodes.on('click', d => {
    if (d.winner === null) {
      generalUtils.enterScore(d.player1, d.player2, 'Pool Play');
    }
  });
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
