import * as d3 from 'd3';
import jQuery from 'jquery';

import template from './template.html';
import './style.scss';

function setup () {
  jQuery('#statsTab').html(template);
}

let graph = {
  nodes: [],
  links: [],
  nodeLookup: {}
};

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
        newNodes.push({
          id: playerName
        });
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
      graph.links.push({
        source: match['Player 1'],
        target: match['Player 2']
      });
    }
  });
  return graph;
}

function renderNodes (svg, graph) {
  let nodes = svg.select('#nodeLayer').selectAll('g')
    .data(graph.nodes);
  nodes.exit().remove();
  let nodesEnter = nodes.enter().append('g');
  nodesEnter.append('circle');
  let nodesEnterText = nodesEnter.append('text');
  nodesEnterText.append('tspan').classed('firstName', true);
  nodesEnterText.append('tspan').classed('lastName', true);
  nodes = nodesEnter.merge(nodes);

  nodes.select('.firstName').text(d => d.id.split(' ')[0])
    .attr('y', '-0.25em');
  nodes.select('.lastName').text(d => d.id.split(' ').slice(1).join(' '))
    .attr('y', '0.75em')
    .attr('x', '0em');
  nodes.select('circle').attr('r', function (d) {
    let bounds = this.parentNode.getElementsByTagName('text')[0].getBoundingClientRect();
    d.r = Math.max(bounds.width, bounds.height) / 2 + 5;
    return d.r;
  });

  return nodes;
}

function renderLinks (svg, graph) {
  let links = svg.select('#linkLayer').selectAll('path')
    .data(graph.links);
  links.exit().remove();
  let linksEnter = links.enter().append('path');
  links = linksEnter.merge(links);

  return links;
}

function computeLinkPath (d) {
  return 'M' + d.source.x + ',' + d.source.y +
         'L' + d.target.x + ',' + d.target.y;
}

function boundingBoxForce (bounds) {
  let nodes = [];

  function force () {
    nodes.forEach(node => {
      if (node.x - node.r <= 0) {
        node.x = node.r;
        node.vx = Math.abs(node.vx);
      }
      if (node.y - node.r <= 0) {
        node.y = node.r;
        node.vy = Math.abs(node.vy);
      }
      if (node.x + node.r >= bounds.width) {
        node.x = bounds.width - node.r;
        node.vx = -Math.abs(node.vx);
      }
      if (node.y + node.r >= bounds.height) {
        node.y = bounds.height - node.r;
        node.vy = -Math.abs(node.vy);
      }
    });
  }
  force.initialize = function (newNodes) {
    nodes = newNodes;
  };
  return force;
}

let simulation;

function render () {
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
      .alphaTarget(1)
      .alphaMin(0)
      .velocityDecay(0.01)
      .force('link', d3.forceLink()
        .id(d => d.id)
        .distance(d => d.source.r + d.target.r + 40))
      .force('center', d3.forceCenter(bounds.width / 2, bounds.height / 2))
      .force('collision', d3.forceCollide().radius(d => d.r))
      .force('boundingBox', boundingBoxForce(bounds))
      .on('tick', () => {
        nodes.attr('transform', d => 'translate(' + d.x + ',' + d.y + ')');
        links.attr('d', computeLinkPath);
      });
  }

  simulation.nodes(graph.nodes);
  simulation.force('link').links(graph.links);
}

export default {
  setup,
  render
};
