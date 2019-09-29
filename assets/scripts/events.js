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

const checkForWinX = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    console.log('Player X wins!')
    store.game.over = true
    // need to stop game if there's a winning condition
    // somehow updating store.game.over to true or false
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    console.log('Player X wins!')
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    console.log('Player X wins!')
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    console.log('Player X wins!')
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    console.log('Player X wins!')
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    console.log('Player X wins!')
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    console.log('Player X wins!')
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    console.log('player X wins!')
  } else {
    console.log('Keep checking for win')
  }
}

const checkForWinO = function () {
  if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    console.log('Player O wins!')

    // need to stop game if there's a winning condition
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    console.log('Player O wins!')
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    console.log('Player O wins!')
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    console.log('Player O wins!')
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    console.log('Player O wins!')
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    console.log('Player O wins!')
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    console.log('Player O wins!')
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    console.log('player O wins!')
  } else {
    console.log('Keep checking for win')
  }
}

const add = function (event) {
  const click = event.target
  if ($(click).text() === '') {
    const clickId = $(click).prop('id')
    gameBoard[clickId] = play
    $(click).html(play)
    // update!
    gameEvents.onUpdateGame(clickId, play)
    swapPlay()
    checkForWinX()
    checkForWinO()
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
