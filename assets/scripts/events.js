'use strict'

const ui = require('./ui.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

// keep track of player
let player = 'x'
// swap player
const swapPlayer = function () {
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}

const add = function (event) {
  const click = event.target
  if ($(click).text() === '') {
    const clickId = $(click).prop('id')
    gameBoard[clickId] = player
    $(click).html(player)
    swapPlayer()
  } else {
    ui.invalidMoveMessage()
  }
}

module.exports = {
  add
}
