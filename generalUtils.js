import * as d3 from 'd3';
import jQuery from 'jquery';

import makeSelectMenu from './style/makeSelectMenu';
import googleSheetsFakeDb from './googleSheetsFakeDb';

function populatePlayerLists (containerSelector) {
  let container = d3.select(containerSelector);
  let data = [{
    'text': 'Choose a Player'
  }].concat(window.GLOBALS.DATA.Players.contents);
  let options = container.selectAll('li').data(data);
  let optionsEnter = options.enter().append('li');
  optionsEnter.append('span')
    .attr('class', 'name');
  optionsEnter.append('span')
    .attr('class', 'charity');
  options = options.merge(optionsEnter);

  options
    .attr('value', d => d['Player Name'])
    .classed('selected', d => !d['Player Name']); // Start w/ "Choose a Player" selected
  options.select('.name')
    .text(d => d['Player Name'] || d.text);
  options.select('.charity')
    .text(d => d['Charity']);

  makeSelectMenu(container.node());
}

function populateLeaderBoard () {
  // Calculate the total bets per player
  let totalBets = {};
  window.GLOBALS.DATA.Bets.contents.forEach(bet => {
    if (!totalBets[bet.Player]) {
      totalBets[bet.Player] = 0;
    }
    totalBets[bet.Player] += 1;
  });

  // Calculate the total wins / losses per player
  // TODO

  // Assemble the summary stats for each player
  let leaderBoardData = window.GLOBALS.DATA.Players.contents.map(player => {
    return [
      player['Player Name'],
      player['Charity'],
      totalBets[player['Player Name']] || 0,
      0,
      0
    ];
  });

  // Fill in the table
  let rows = d3.select('#leaderBoard').select('tbody').selectAll('tr')
    .data(leaderBoardData);
  rows.exit().remove();
  let rowsEnter = rows.enter()
    .append('tr');
  rows = rowsEnter.merge(rows);

  let cells = rows.selectAll('td').data(d => d);
  cells.exit().remove();
  let cellsEnter = cells.enter()
    .append('td');
  cells = cellsEnter.merge(cells);

  cells.text(d => d);
}

function showSpinner (show) {
  if (show) {
    jQuery('#spinner').show();
  } else {
    jQuery('#spinner').hide();
  }
}

function handleSubmission (validationFunction, tableName, formElement) {
  validationFunction().then(() => {
    showSpinner(true);
    googleSheetsFakeDb.submitForm(tableName, formElement)
      .then(() => {
        // Wait a couple seconds to refresh the page so Google has time
        // to populate the spreadsheet
        window.setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  }).catch(() => {});
}

export default {
  populatePlayerLists,
  populateLeaderBoard,
  showSpinner,
  handleSubmission
};