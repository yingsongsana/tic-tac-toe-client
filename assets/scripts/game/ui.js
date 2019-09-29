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

module.exports = {
  onCreateNewGameSuccess,
  onUpdateGameSuccess,
  onCreateNewGameFailure
}
