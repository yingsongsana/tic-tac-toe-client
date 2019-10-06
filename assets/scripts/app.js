'use strict'

const authEvents = require('./auth/events')
const events = require('./game/events')
// const gameEvents = require('./game/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.game-board').on('load', events.hideBoard)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.game-board').on('click', events.playNewGame)
  $('#new-game').on('click', events.onCreateNewGame)
  $('#index').on('click', events.onGetGames)
})
