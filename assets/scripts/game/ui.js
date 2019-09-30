'use strict'

const store = require('./../store.js')

const message = function (newText) {
  $('#game-message').text(newText)
}

const onCreateNewGameSuccess = function (data) {
  store.game = data.game
  console.log(data.game)
  // message('New game has been create!')
}

const onUpdateGameSuccess = function (data) {
  store.game = data.game
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

const userMessage = function (newText) {
  $('#game-message').text(newText)
}
const alertMessage = function (newText) {
  $('#alert-message').text(newText)
}

const invalidMoveMessage = function () {
  alertMessage('Invalid move! Pick another!')
}

const currentPlayerXMessage = function () {
  userMessage(`Make your move player X `)
}

const currentPlayerOMessage = function () {
  userMessage('Make your move player O')
}

module.exports = {
  onCreateNewGameSuccess,
  onUpdateGameSuccess,
  onCreateNewGameFailure,
  onWinningX,
  onWinningO,
  invalidMoveMessage,
  currentPlayerXMessage,
  currentPlayerOMessage
}
