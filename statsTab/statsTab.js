import * as d3 from 'd3';
import jQuery from 'jquery';

import template from './template.html';
import './style.scss';

function setup () {
  jQuery('#statsTab').html(template);
}

function getGraph (date) {
  let graph = {
    nodes: [],
    links: []
  };

  window.GLOBALS.DATA.Players.contents.forEach(player => {
    if (new Date(player['Timestamp']) <= date) {
      graph.nodes.push({
        id: player['Player Name']
      });
    }
  });

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

function render () {
  let statsTab = d3.select('#statsTab');
  let bounds = statsTab.node().getBoundingClientRect();
  let svg = statsTab.select('svg');
  svg.attr('width', bounds.width)
    .attr('height', bounds.height);

  let graph = getGraph(new Date()); // todo: pass in a date from a slider

  let nodes = renderNodes(svg, graph);
  let links = renderLinks(svg, graph);

  let simulation = d3.forceSimulation();
  simulation.nodes(graph.nodes);
  simulation.alphaTarget(1);
  simulation.alphaMin(0);
  simulation.velocityDecay(0.01);
  simulation.force('link', d3.forceLink()
    .id(d => d.id)
    .distance(d => d.source.r + d.target.r + 40)
    .links(graph.links));
  simulation.force('center', d3.forceCenter(bounds.width / 2, bounds.height / 2));
  simulation.force('collision', d3.forceCollide().radius(d => d.r));
  simulation.force('boundingBox', boundingBoxForce(bounds));
  simulation.on('tick', () => {
    nodes.attr('transform', d => 'translate(' + d.x + ',' + d.y + ')');
    links.attr('d', computeLinkPath);
  });
}

export default {
  setup,
  render
};
