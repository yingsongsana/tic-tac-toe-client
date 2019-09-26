'use strict'

const userMessage = function (newText) {
  $('#game-message').text(newText)
  $('#game-massage').removeClass('alt_alert')
  $('#game-massage').addClass('alert')
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
  invalidMoveMessage,
  currentPlayerXMessage,
  currentPlayerOMessage
}
