'use strict'

const ui = require('./ui.js')
const gameEvents = require('./game/events.js')
const store = require('./store.js')
const gameUi = require('./game/ui.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

// keep track of player
let play = 'X'
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

const checkForWin = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    gameUi.onWinningX()
    // need to stop game if there's a winning condition
    // somehow updating store.game.over to true or false ?
    // store.game.over = true
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    gameUi.onWinningX()
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    gameUi.onWinningX()
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    gameUi.onWinningX()
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    gameUi.onWinningX()
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    gameUi.onWinningO()
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    gameUi.onWinningO()
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    gameUi.onWinningO()
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    gameUi.onWinningO()
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    gameUi.onWinningO()
  } else {
    console.log('Keep checking for win')
  }
}

const add = function (event) {
  const click = event.target
  if ($(click).text() === '') {
    const clickId = $(click).prop('id')
    gameBoard[clickId] = play
    $(click).text(play)
    gameEvents.onUpdateGame(clickId, play)
    // update!
    swapPlay()
    checkForWin()
  } else {
    ui.invalidMoveMessage()
  }
}

// const stopGame = function () {
//   if ()
// store.game.over = true
// }

const playNewGame = function () {
  if (!store.game) {
    gameUi.onCreateNewGameFailure()
  } else {
    add(event)
    // stopGame()
  }
}

module.exports = {
  playNewGame
}
