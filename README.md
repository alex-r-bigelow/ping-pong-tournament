An interface for scheduling and visualizing a charity ping pong tournament, optimized for SCI's touch table.

View the interface [here](https://alex-r-bigelow.github.io/ping-pong-tournament/).

Prerequisites:
==============

git, Node.js (npm) and webpack

Setup:
======
1. Fork this repository, and clone it locally

2. Create an [API key](https://console.developers.google.com/apis/credentials) (make sure to limit its usage to `https://your-username.github.io/*` and `http://localhost:*`), and paste it at the top of `googleSheetsFakeDb.js`.

3. Create three google forms (each should log results to a spreadsheet), plus two additional spreadsheets (each field in the forms should be a "short answer text" question):
  - `Players` form:
    - `Player Name`
    - `Charity`
  - `Bets` form:
    - `Player`
  - `Matches` form:
    - `Timestamp`
    - `Round`
    - `Player 1 Name`
    - `Player 2 Name`
    - `Player 1 Set 1`
    - `Player 2 Set 1`
    - `Player 1 Set 2`
    - `Player 2 Set 2`
    - `Player 1 Set 3`
    - `Player 2 Set 3`
  - `Pools` spreadsheet:
    - `Pool`
    - `Player`
  - `Bracket` spreadsheet:
    - `Seed`
    - `Player`

4. You should set each spreadsheet to be visible to anyone with the link. Once you've set these up, follow the instructions in `formDetails/README.md` to extract the field names from each of the forms.

5. Set deadlines for each phase of the tournament at the top of `index.js`. You can test what the interface will look like as each deadline expires by enabling the `DEBUG_MODE` option.

6. Finally, in this directory:

```bash
npm install
webpack
```

7. The last step will have bundled everything into a `docs/` directory that you should then commit to your fork. In the GitHub settings for your fork, make sure to enable the docs folder as the source for GitHub Pages, if it isn't already.

It will be up to you to manage the tournament; it's up to you to manually populate the `Pools` tab of the spreadsheet; once you have, the website will automatically shut down registration. Similarly, once you've populated the `Bracket` tab, the pools part of the interface will be locked.

*Note:* It's up to you to populate the `Pools` and `Bracket` spreadsheets when the deadlines expire; this was a deliberate design decision to allow a little adaptation as necessary. Make a number for each pool, and a row for each player that has signed up. For the bracket, assign a numeric seed to each player.

Development:
============
If you want to make changes and see what they're like before deploying (e.g. if you enable `DEBUG_MODE`), use this command, and see the interface at localhost:8080

    webpack-dev-server --progress --colors --watch

And, of course, once you're satisfied with your changes, run `webpack` again, and commit the results.
