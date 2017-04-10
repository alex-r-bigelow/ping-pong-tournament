import * as d3 from 'd3';
import jQuery from 'jquery';

import generalUtils from '../generalUtils';
import edgeTechniques from '../edgeTechniques';

import template from './template.html';
import './style.scss';

let graph = {
  nodes: [],
  links: [],
  nodeLookup: {}
};
let simulation;

function setup () {
  jQuery('#statsTab').html(template);
}

function updateGraph (date) {
  let newNodes = [];
  let newNodeLookup = {};

  // Create a node for each player that has signed up
  // on or before date

  window.GLOBALS.DATA.Players.contents.forEach(player => {
    if (new Date(player['Timestamp']) <= date) {
      let playerName = player['Player Name'];
      newNodeLookup[playerName] = newNodes.length;
      if (graph.nodeLookup[playerName]) {
        // keep the old node, as it will have x, y, and
        // velocity parameters from before, and we want the
        // switch to be smooth
        newNodes.push(graph.nodes[graph.nodeLookup[playerName]]);
      } else {
        let newNode = generalUtils.splitName(playerName);
        newNode.id = playerName;
        newNodes.push(newNode);
      }
    }
  });

  graph.nodes = newNodes;
  graph.nodeLookup = newNodeLookup;

  graph.links = [];

  // Create a link for each game that has been entered
  // on or before date (don't have to keep the old links,
  // as d3 stores all the graph drawing stuff on the nodes)

  window.GLOBALS.DATA.Matches.contents.forEach(match => {
    if (new Date(match['Timestamp']) <= date) {
      let player1 = match['Player 1'];
      let player2 = match['Player 2'];
      let winner = generalUtils.computeWinner(match);
      graph.links.push({
        source: winner === player1 ? player2 : player1,
        target: winner
      });
    }
  });
  return graph;
}

function startDraggingNode (d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
  d3.select(this).classed('dragging', true);
}

function dragNode (d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function finishDraggingNode (d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
  d3.select(this).classed('dragging', false);
}

function renderNodes (svg, graph) {
  let nodes = svg.select('#nodeLayer').selectAll('g')
    .data(graph.nodes, d => d.id);
  nodes.exit().remove();
  let nodesEnter = nodes.enter().append('g')
    .call(d3.drag()
      .on('start', startDraggingNode)
      .on('drag', dragNode)
      .on('end', finishDraggingNode));
  nodesEnter.append('circle');
  let nodesEnterText = nodesEnter.append('text');
  nodesEnterText.append('tspan').classed('firstName', true);
  nodesEnterText.append('tspan').classed('lastName', true);
  nodes = nodesEnter.merge(nodes);

  nodes.select('.firstName').text(d => d.firstName)
    .attr('y', '-0.25em');
  nodes.select('.lastName').text(d => d.lastName)
    .attr('y', '0.75em')
    .attr('x', '0em');
  nodes.select('circle').attr('r', window.NODE_SIZE / 2);

  return nodes;
}

function renderLinks (svg, graph) {
  let links = svg.select('#linkLayer').selectAll('path')
    .data(graph.links);
  links.exit().remove();
  let linksEnter = links.enter().append('path')
    .classed('link', true);
  links = linksEnter.merge(links);

  return links;
}

function boundingBoxForce (bounds) {
  let nodes = [];

  function force () {
    nodes.forEach(node => {
      if (node.x - window.NODE_SIZE / 2 <= 0) {
        node.x = window.NODE_SIZE / 2;
        node.vx = Math.abs(node.vx);
      }
      if (node.y - window.NODE_SIZE / 2 <= 0) {
        node.y = window.NODE_SIZE / 2;
        node.vy = Math.abs(node.vy);
      }
      if (node.x + window.NODE_SIZE / 2 >= bounds.width) {
        node.x = bounds.width - window.NODE_SIZE / 2;
        node.vx = -Math.abs(node.vx);
      }
      if (node.y + window.NODE_SIZE / 2 >= bounds.height) {
        node.y = bounds.height - window.NODE_SIZE / 2;
        node.vy = -Math.abs(node.vy);
      }
    });
  }
  force.initialize = function (newNodes) {
    nodes = newNodes;
  };
  return force;
}

function render () {
  window.NODE_SIZE = 50;

  let statsTab = d3.select('#statsTab');
  let bounds = statsTab.node().getBoundingClientRect();
  let svg = statsTab.select('svg');
  svg.attr('width', bounds.width)
    .attr('height', bounds.height);

  let graph = updateGraph(new Date()); // todo: pass in a date from a slider

  let nodes = renderNodes(svg, graph);
  let links = renderLinks(svg, graph);

  if (!simulation) {
    // First time rendering; set up the simulation
    simulation = d3.forceSimulation()
      .velocityDecay(0.05)
      .force('link', d3.forceLink()
        .id(d => d.id)
        .distance(d => window.NODE_SIZE + 60)
        .strength(0.05))
      .force('repulsion', d3.forceManyBody().strength(-7))
      // .force('center', d3.forceCenter(bounds.width / 2, bounds.height / 2))
      .force('collision', d3.forceCollide().radius(window.NODE_SIZE / 2))
      .force('boundingBox', boundingBoxForce(bounds))
      .on('tick', () => {
        nodes.attr('transform', d => 'translate(' + d.x + ',' + d.y + ')');
        links.attr('d', edgeTechniques.drawPointyArc);
      });
  } else {
    // Perturb it just a little
    simulation.alpha(0.3).restart();
  }

  simulation.nodes(graph.nodes);
  simulation.force('link').links(graph.links);
}

export default {
  setup,
  render
};
