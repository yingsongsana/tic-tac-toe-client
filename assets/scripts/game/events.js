'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const scriptEvents = require('../events')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateNewGame = function (data) {
  // console.log('Creating new game!')
  event.preventDefault()

  api.create(data)
    .then(ui.onCreateNewGameSuccess)
  $('.box').html('')
  // $('.game-board').on('click', scriptEvents.playNewGame)
}

const onUpdateGame = function (index, move, over) {
  api.update(index, move, over)
    .then(ui.onUpdateGameSuccess)
}

module.exports = {
  onCreateNewGame,
  onUpdateGame
}
