import * as d3 from 'd3';
import makeSelectMenu from './style/makeSelectMenu';

function populatePlayerLists (containerSelector) {
  let dummyData = [
    {
      'name': 'Choose a Player',
      'charity': ''
    },
    {
      'name': 'Chris Johnson',
      'charity': 'UNITED STATES FUND FOR UNICEF',
      'bets': 57,
      'wins': 7,
      'losses': 0
    },
    {
      'name': 'Greg Jones',
      'charity': 'DOCTORS WITHOUT BORDERS USA INC/MEDECINS SANS FRONTIERES USA INC',
      'bets': 4,
      'wins': 4,
      'losses': 3
    }
  ];

  let container = d3.select(containerSelector);
  let options = container.selectAll('li').data(dummyData);
  let optionsEnter = options.enter().append('li');
  optionsEnter.append('span')
    .attr('class', 'name');
  optionsEnter.append('span')
    .attr('class', 'charity');
  options = options.merge(optionsEnter);

  options.attr('id', d => d.name)
    .attr('value', d => d.name)
    .attr('class', d => d.name === 'Choose a Player' ? 'selected' : null);
  options.select('.name')
    .text(d => d.name);
  options.select('.charity')
    .text(d => d.charity);

  makeSelectMenu(container.node());
}

export default {
  populatePlayerLists
};
