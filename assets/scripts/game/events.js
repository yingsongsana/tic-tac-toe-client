'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateNewGame = function (data) {
  // console.log('Creating new game!')
  event.preventDefault()

  api.create(data)
    .then(ui.onCreateNewGameSuccess)
}

const onUpdateGame = function (index, move) {
  api.update(index, move)
    .then(ui.onUpdateGameSuccess)
}

module.exports = {
  onCreateNewGame,
  onUpdateGame
}
