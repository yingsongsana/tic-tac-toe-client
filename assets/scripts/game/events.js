'use strict'

const ui = require('./ui.js')
// const gameEvents = require('./game/events.js')
const store = require('./../store.js')
const gameUi = require('./ui.js')
const api = require('./api.js')

let gameBoard = ['', '', '', '', '', '', '', '', '']
// keep track of player
let play = 'X'
let over = false

const onCreateNewGame = function (event) {
  event.preventDefault()
  // clearing the divs with any previous moves
  $('.box').html('')
  // resetting variables to default
  over = false
  play = 'X'
  gameBoard = ['', '', '', '', '', '', '', '', '']
  api.create()
    .then(ui.onCreateNewGameSuccess)
}

const onUpdateGame = function (index, move, over) {
  api.update(index, move, over)
    .then(ui.onUpdateGameSuccess)
}
// unable to translate this into
const onGetGames = function (event) {
  api.index(event)
    .then(ui.onGetGamesSuccess)
}

// swap player
const swapPlay = function () {
  if (play === 'X') {
    play = 'O'
    ui.currentPlayerOMessage()
  } else {
    play = 'X'
    ui.currentPlayerXMessage()
  }
}

// if there's a win....
const checkForWin = function () {
  if (over === false && gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    // show message to user
    gameUi.onWinningX()
    // update the game status from false to true, indicating it's over
    over = true
  } else if (over === false && gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    gameUi.onWinningX()
    over = true
  } else if (over === false && gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
    over = true
  } else if (over === false && gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    gameUi.onWinningX()
    over = true
  } else if (over === false && gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    gameUi.onWinningX()
    over = true
  } else if (over === false && gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
    over = true
  } else if (over === false && gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
    over = true
  } else if (over === false && gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    gameUi.onWinningX()
    over = true
  } else if (over === false && gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    gameUi.onWinningO()
    over = true
  } else if (over === false && gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    gameUi.onWinningO()
    over = true
  } else if (over === false && gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
    over = true
  } else if (over === false && gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    gameUi.onWinningO()
    over = true
  } else if (over === false && gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    gameUi.onWinningO()
    over = true
  } else if (over === false && gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
    over = true
  } else if (over === false && gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
    over = true
  } else if (over === false && gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    gameUi.onWinningO()
    over = true
  } else {
    // game is not over
    over = false
  }
}

const add = function (event) {
  const click = event.target
  if ($(click).text() === '' && !over) {
    const clickId = $(click).prop('id')
    gameBoard[clickId] = play
    $(click).text(play)
    const saveCurrentPlayer = play
    // changes play from x to o and vice versa
    swapPlay()
    checkForWin()
    // console.log('This is ', over)
    onUpdateGame(clickId, saveCurrentPlayer, over)
  } else {
    // square already has X or O
    ui.invalidMoveMessage()
  }
}

const playNewGame = function () {
  if (!store.game) {
    gameUi.onCreateNewGameFailure()
  } else {
    add(event)
  }
}

// const showStats = function (data) {
//   store.data = data.game
//   const stats = data.game
//   onGetGames()
//   How can I find just the number of games played?
//   $('.show-index').text(stats)
// }

module.exports = {
  playNewGame,
  onCreateNewGame,
  onUpdateGame,
  onGetGames
  // showStats
}
