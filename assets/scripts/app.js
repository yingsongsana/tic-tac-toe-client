'use strict'

const authEvents = require('./auth/events')
const scriptEvents = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  // when clicked, adds 'x' or 'o'
  $('.game-board').on('click', scriptEvents.add)
})
