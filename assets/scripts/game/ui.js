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
  // $('.cell-index').attr('cell-index', data.game.index)
  // console.log(data.game.index)
}

const onCreateNewGameFailure = function () {
  message('Create new game first!')
}

module.exports = {
  onCreateNewGameSuccess,
  onUpdateGameSuccess,
  onCreateNewGameFailure
}
