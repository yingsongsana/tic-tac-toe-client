'use strict'

const store = require('./../store.js')

const message = function (newText) {
  $('#game-message').text(newText)
  $('#game-message').removeClass('altMessage')
  $('#game-message').addClass('message')
}

const altMessage = function (newText) {
  $('#game-message').text(newText)
  $('#game-message').removeClass('message')
  $('#game-message').addClass('altMessage')
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

const onGetGamesSuccess = function (data) {
  store.game = data.game
  console.log(data)
  // message('Games won ', store.game.)
}

const onWinningX = function () {
  message('Player X wins!')
}

const onWinningO = function () {
  message('Player O wins!')
}

const invalidMoveMessage = function () {
  altMessage('Invalid move!')
}

const currentPlayerXMessage = function () {
  altMessage(`Make your move player X `)
}

const currentPlayerOMessage = function () {
  altMessage('Make your move player O')
}

module.exports = {
  onCreateNewGameSuccess,
  onUpdateGameSuccess,
  onCreateNewGameFailure,
  onGetGamesSuccess,
  onWinningX,
  onWinningO,
  invalidMoveMessage,
  currentPlayerXMessage,
  currentPlayerOMessage
}
