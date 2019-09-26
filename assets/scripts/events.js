'use strict'

const ui = require('./ui.js')

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

const add = function (event) {
  const click = event.target
  if ($(click).text() === '') {
    const clickId = $(click).prop('id')
    gameBoard[clickId] = play
    $(click).html(play)
    swapPlay()
  } else {
    ui.invalidMoveMessage()
  }
  findCurrentPlayer()
}

module.exports = {
  add
}
