import * as d3 from 'd3';
import jQuery from 'jquery';

import makeSelectMenu from './style/makeSelectMenu';
import googleSheetsFakeDb from './googleSheetsFakeDb';

const INPUT_NAMES = [
  'Player 1 Set 1',
  'Player 2 Set 1',
  'Player 1 Set 2',
  'Player 2 Set 2',
  'Player 1 Set 3',
  'Player 2 Set 3'
];

function populatePlayerLists (containerSelector) {
  let container = d3.select(containerSelector);
  let data = [{
    'text': 'Choose a Player'
  }].concat(window.GLOBALS.DATA.Players.contents);
  let options = container.selectAll('li').data(data);
  options.exit().remove();
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
  let totalWins = {};
  let totalLosses = {};

  window.GLOBALS.DATA.Matches.contents.forEach(match => {
    let winner = computeWinner(match);
    let player1 = match['Player 1'];
    let player2 = match['Player 2'];
    if (totalWins[player1] === undefined) {
      totalWins[player1] = 0;
      totalLosses[player1] = 0;
    }
    if (totalWins[player2] === undefined) {
      totalWins[player2] = 0;
      totalLosses[player2] = 0;
    }
    if (winner === player1) {
      totalWins[player1] += 1;
      totalLosses[player2] += 1;
    } else {
      totalWins[player2] += 1;
      totalLosses[player1] += 1;
    }
  });

  // Get the seeds for each player
  let seeds = {};
  window.GLOBALS.DATA.Bracket.contents.forEach(seed => {
    seeds[seed.Player] = parseInt(seed.Seed);
  });

  // Assemble the summary stats for each player
  let leaderBoardData = window.GLOBALS.DATA.Players.contents.map(player => {
    return [
      player['Player Name'],
      player['Charity'],
      totalBets[player['Player Name']] || 0,
      seeds[player['Player Name']] || '',
      totalWins[player['Player Name']] || 0,
      totalLosses[player['Player Name']] || 0
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
  cells.classed('small', (d, i) => i === 1);  // shrink the charity text
}

function showSpinner (show) {
  if (show) {
    jQuery('#spinner').show();
  } else {
    jQuery('#spinner').hide();
  }
}

function displayNotification (message) {
  let notification = jQuery('#notification');
  notification.text(message);
  notification.show();
  window.setTimeout(() => {
    notification.hide(1000);
  }, 5000);
}

function handleSubmission (validationFunction, tableName, formElement) {
  showSpinner(true);
  validationFunction().then(() => {
    googleSheetsFakeDb.submitForm(tableName, formElement)
      .then(() => {
        // Wait a few seconds to refresh the page so Google has time
        // to populate the spreadsheet
        window.setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }).catch(() => {});
}

function constructMatchLookup () {
  let lookup = {};
  window.GLOBALS.DATA.Matches.contents.forEach((match, index) => {
    let player1 = match['Player 1'];
    let player2 = match['Player 2'];
    if (!lookup[player1]) {
      lookup[player1] = [];
    }
    if (!lookup[player2]) {
      lookup[player2] = [];
    }
    lookup[player1].push(index);
    lookup[player2].push(index);
  });
  window.GLOBALS.MATCH_LOOKUP = lookup;
}

function getAllMatches (player1, player2) {
  if (!window.GLOBALS.MATCH_LOOKUP) {
    constructMatchLookup();
  }
  return (window.GLOBALS.MATCH_LOOKUP[player1] || [])
    .map(index => window.GLOBALS.DATA.Matches.contents[index])
    .filter(match => match['Player 1'] === player2 || match['Player 2'] === player2);
}

function splitName (playerName) {
  // Split the name into two roughly equal-length lines
  let firstName = playerName.slice(0, playerName.length / 2);
  let lastName = playerName.slice(playerName.length / 2);
  if (firstName[firstName.length - 1] === ' ') {
    firstName = firstName.trim();
  } else if (lastName[0] === ' ') {
    lastName = lastName.trim();
  } else {
    firstName = firstName.split(' ');
    lastName = lastName.split(' ');
    let middleName = firstName.pop() + lastName.splice(0, 1);
    firstName = firstName.join(' ');
    lastName = lastName.join(' ');

    if ((firstName + middleName).length < (lastName + middleName).length) {
      firstName = firstName + ' ' + middleName;
    } else {
      lastName = middleName + ' ' + lastName;
    }
  }
  return {
    firstName,
    lastName
  };
}

function computeWinner (match) {
  let player1 = 0;
  let player2 = 0;
  INPUT_NAMES.forEach(n => {
    match[n] = parseInt(match[n]);
  });
  if (match['Player 1 Set 1'] > match['Player 2 Set 1']) {
    player1 += 1;
  } else if (match['Player 1 Set 1'] < match['Player 2 Set 1']) {
    player2 += 1;
  } else {
    return null;
  }
  if (match['Player 1 Set 2'] > match['Player 2 Set 2']) {
    player1 += 1;
  } else if (match['Player 1 Set 2'] < match['Player 2 Set 2']) {
    player2 += 1;
  }
  if (match['Player 1 Set 3'] > match['Player 2 Set 3']) {
    player1 += 1;
  } else if (match['Player 1 Set 3'] < match['Player 2 Set 3']) {
    player2 += 1;
  }

  if (player1 === player2) {
    return null;
  }

  return player1 > player2 ? match['Player 1'] : match['Player 2'];
}

function enterScore (player1, player2, round) {
  if (d3.select('body').classed('guessMode')) {
    return enterGuess(jQuery('#guesserName').val(), player1, player2, round);
  }

  let modal = jQuery('#scoreEntryModal');
  modal.show();
  modal.find('input').removeClass('error');

  modal.find('#player1').text(player1);
  modal.find('#player2').text(player2);
  modal.find('#roundField').text(round);

  modal.find('#cancelButton').on('click', () => modal.hide());
  modal.find('#submitScoresButton').on('click', () => {
    handleSubmission(() => {
      let fakeMatch = {};
      let badData = false;
      INPUT_NAMES.forEach((n, i) => {
        let element = modal.find('[name="' + n + '"]')[0];
        fakeMatch[n] = parseInt(element.value);
        if (i < 2 && isNaN(fakeMatch[n])) {
          jQuery(element).addClass('error');
          displayNotification('You need to play at least one set! ' +
            'Usually people play two out of three, but that\'s up to you.');
          badData = true;
        }
      });
      if (badData) {
        return Promise.reject();
      }
      if (computeWinner(fakeMatch) === null) {
        modal.find('input').addClass('error');
        displayNotification('Sorry, no ties allowed... keep playing!');
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
    }, 'Matches', modal[0]);
  });
}

function enterGuess (guesser, player1, player2, round) {
  let modal = jQuery('#guessEntryModal');
  modal.show();
  modal.find('input')
    .removeClass('error')
    .attr('name', 'Winner');

  modal.find('#guessPlayer1').val(player1).prop('checked', true);
  modal.find('#guessPlayer1label').text(player1);
  modal.find('#guessPlayer2').val(player2);
  modal.find('#guessPlayer2label').text(player2);
  modal.find('#roundGuessField').text(round);

  modal.find('#cancelGuessButton').on('click', () => modal.hide());
  modal.find('#submitGuessButton').on('click', () => {
    handleSubmission(() => {
      return Promise.reject();
    }, 'Guesses', modal[0]);
  });
}

export default {
  populatePlayerLists,
  populateLeaderBoard,
  showSpinner,
  handleSubmission,
  displayNotification,
  getAllMatches,
  computeWinner,
  enterScore,
  enterGuess,
  splitName
};
