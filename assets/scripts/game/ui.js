'use strict'

const store = require('../store.js')


const message = function (newText) {
  $('#game-message').text(newText)
}

const onCreateNewGameSuccess = function (data) {
  $('#game-board')
  store.game = data.game
  console.log(data.game)
}

const onUpdateGameSuccess = function (data) {
  console.log(data)
}

const onCreateNewGameFailure = function () {
  message('Create new game first!')
}

const onWinningX = function () {
  message('Player X wins!')
}

const onWinningO = function () {
  message('Player O wins!')
}

module.exports = {
  onCreateNewGameSuccess,
  onUpdateGameSuccess,
  onCreateNewGameFailure,
  onWinningX,
  onWinningO
}
