'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateNewGame = function (data) {
  // console.log('Creating new game!')
  event.preventDefault()

  api.create(data)
    .then(ui.onCreateNewGameSuccess)
  $('.box').html('')
}

const onUpdateGame = function (index, move, over) {
  api.update(index, move, over)
    .then(ui.onUpdateGameSuccess)
}

module.exports = {
  onCreateNewGame,
  onUpdateGame
}
