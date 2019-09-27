'use strict'

const ui = require('./ui.js')
const gameEvents = require('./game/events.js')
const store = require('./store.js')
const gameUi = require('./game/ui.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

// keep track of player
let play = 'x'
// swap player
const swapPlay = function () {
  if (play === 'x') {
    play = 'o'
  } else {
    play = 'x'
  }
}

const playerX = 'x'
const playerO = 'o'
let currentPlayer = playerX
const findCurrentPlayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO
    ui.currentPlayerOMessage()
  } else {
    currentPlayer = playerX
    ui.currentPlayerXMessage()
  }
}

// const isBoardFilled = function () {
//   for (let i = 0; i < gameBoard.length; i++) {
//     if (gameBoard[i] === 'x' || gameBoard[i] === 'o') {
//
//     }
//   }
// }
//
// console.log(gameBoard.every(isArrayFilled))

const add = function (event) {
  const click = event.target
  if ($(click).text() === '') {
    const clickId = $(click).prop('id')
    gameBoard[clickId] = play
    $(click).html(play)
    // update!
    gameEvents.onUpdateGame(clickId, play)
    swapPlay()
  } else {
    ui.invalidMoveMessage()
  }
  findCurrentPlayer()
}

const playNewGame = function () {
  if (!store.game) {
    gameUi.onCreateNewGameFailure()
  } else {
    add()
  }
}

module.exports = {
  playNewGame
}
