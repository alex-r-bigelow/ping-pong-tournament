import * as d3 from 'd3';
import jQuery from 'jquery';

import generalUtils from '../generalUtils';
import edgeTechniques from '../edgeTechniques';

import template from './template.html';
import './style.scss';

const CELL_PADDING = 10;

function setup () {
  jQuery('#bracketTab').html(template);
}

function constructBracket () {
  let bracket = window.GLOBALS.BRACKET = {
    lookup: {},
    nodes: [],
    seedLookup: {},
    numPlayers: window.GLOBALS.DATA.Bracket.contents.length,
    links: []
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
        cantPlayYet: false
      };
      lastLayer.push(newNode);
      bracket.nodes.push(newNode);
      bracket.seedLookup[seed.Player] = parseInt(seed.Seed);
    });
  // Add additional BYE nodes until the layer is full
  while (bracket.nodes.length < Math.pow(2, bracket.treeDepth)) {
    let id = 'BYE' + bracket.nodes.length;
    bracket.lookup[id] = bracket.nodes.length;
    let newNode = {
      id,
      type: 'BYE',
      favorite: null,
      underdog: null,
      round: bracket.treeDepth,
      winner: id,
      cantPlayYet: false
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
        cantPlayYet: favoriteNode.winner === null || underdogNode.winner === null
      };

      if (underdogNode.type === 'BYE') {
        newNode.winner = favoriteNode.winner;
      } else if (favoriteNode.winner !== null && underdogNode.winner !== null) {
        let match = generalUtils.getAllMatches(favoriteNode.winner, underdogNode.winner)
          .filter(m => parseInt(m.Round) === round)[0];
        if (match) {
          newNode.winner = generalUtils.computeWinner(match);
        }
      }

      bracket.links.push({
        source: favoriteNode,
        target: newNode
      });
      bracket.links.push({
        source: underdogNode,
        target: newNode
      });

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
      node.normX = 0;
      node.normY = 0;
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
          node.normX = -xOffset;
          node.normY = 0;
          node.ySpan = 2.0;
        } else {
          node.normX = xOffset;
          node.normY = 0;
          node.ySpan = 2.0;
        }
      } else {
        // A deeper node can simply check if its parent is to the left
        // or right of the middle to determine which side it's on
        if (parent.normX < 0) {
          node.normX = -xOffset;
        } else {
          node.normX = xOffset;
        }

        // It can also simply divide the vertical space
        if (parent.favorite === node.id) {
          node.normY = parent.normY - parent.ySpan / 4;
          node.ySpan = parent.ySpan / 2;
        } else {
          node.normY = parent.normY + parent.ySpan / 4;
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
  let svg = bracketTab.select('svg')
    .attrs({ width: null, height: null });
  let containerBounds = bracketTabElement.getBoundingClientRect();
  let bounds = {
    width: Math.max(containerBounds.width, (window.NODE_SIZE + CELL_PADDING) * (bracket.treeDepth * 2)),
    height: Math.max(containerBounds.height, (window.NODE_SIZE + CELL_PADDING) * Math.pow(2, bracket.treeDepth - 1))
  };
  svg.attrs(bounds);

  let xPosition = d3.scaleLinear()
    .domain([-1, 1])
    .range([
      (window.NODE_SIZE + CELL_PADDING) / 2,
      bounds.width - (window.NODE_SIZE + CELL_PADDING) / 2
    ]);
  let yPosition = d3.scaleLinear()
    .domain([-1, 1])
    .range([0, bounds.height]);

  // Render the nodes
  let nodes = svg.select('#nodes').selectAll('g')
    .data(bracket.nodes);
  nodes.exit().remove();
  let nodesEnter = nodes.enter()
    .append('g');
  nodesEnter.append('circle');
  let nodesEnterText = nodesEnter.append('text');
  nodesEnterText.append('tspan')
    .classed('firstName', true)
    .attr('y', '-0.25em');
  nodesEnterText.append('tspan')
    .classed('lastName', true)
    .attr('y', '0.75em')
    .attr('x', '0em');
  nodesEnterText.append('tspan')
    .classed('seed', true)
    .attr('y', '2em')
    .attr('x', '0em');
  nodes = nodesEnter.merge(nodes);

  nodes.each(d => {
    d.x = xPosition(d.normX);
    d.y = yPosition(d.normY);
  });
  nodes.attr('transform', d => {
    return 'translate(' + d.x + ',' + d.y + ')';
  }).attr('class', d => {
    if (d.cantPlayYet) {
      return 'cantPlayYet';
    } else if (d.type === 'BYE') {
      return 'bye';
    } else if (d.winner === null) {
      return 'noScores';
    } else {
      return 'withScores';
    }
  });
  nodes.select('circle')
    .attr('r', window.NODE_SIZE / 2);
  nodes.select('.firstName')
    .text(d => {
      if (d.type === 'BYE') {
        return 'BYE /';
      } else if (d.winner) {
        return generalUtils.splitName(d.winner).firstName;
      } else if (d.cantPlayYet) {
        return 'Players';
      } else {
        return 'Enter';
      }
    });
  nodes.select('.lastName')
    .text(d => {
      if (d.type === 'BYE') {
        return 'PASS';
      } else if (d.winner) {
        return generalUtils.splitName(d.winner).lastName;
      } else if (d.cantPlayYet) {
        return 'TBD';
      } else {
        return 'Scores';
      }
    });
  nodes.select('.seed')
    .text(d => {
      if (d.type !== 'BYE' && d.winner) {
        return bracket.seedLookup[d.winner];
      } else {
        return '';
      }
    });
  nodes.on('click', d => {
    if (!d.cantPlayYet && d.winner === null) {
      let favoriteNode = bracket.nodes[bracket.lookup[d.favorite]];
      let underdogNode = bracket.nodes[bracket.lookup[d.underdog]];
      generalUtils.enterScore(favoriteNode.winner, underdogNode.winner, d.round);
    }
  });

  // Render the links
  let links = svg.select('#links').selectAll('path')
    .data(bracket.links);
  links.exit().remove();
  let linksEnter = links.enter().append('path')
    .classed('link', true);
  links = linksEnter.merge(links);

  links.attr('d', edgeTechniques.drawPointyArc);
}

function render () {
  window.NODE_SIZE = 65;
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
