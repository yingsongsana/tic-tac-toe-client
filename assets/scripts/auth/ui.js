'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function (data) {
  successMessage('Signed up successfully!')
  store.user = data.user
}

const onSignUpFailure = function (event) {
  failureMessage('Signed up failed')
  $(event.target).trigger('reset')
}

const onSignInSuccess = function (data) {
  successMessage('Signed in successfully!')
  store.user = data.user
  // console.log(store.user)
  $('.game').removeClass('hidden')
  $('.new-game').removeClass('hidden')
  $('.greeting').addClass('hidden')
  $('.form').removeClass('hidden')
}

const onSignInFailure = function (event) {
  failureMessage('Signed in failed')
  $(event.target).trigger('reset')
}

const onChangePasswordSuccess = function (data) {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function (event) {
  failureMessage('Changed password failed')
  $(event.target).trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  store.user = ''
  // console.log(store.user)
  $('.game').addClass('hidden')
  $('.form').addClass('hidden')
  $('.greeting').removeClass('hidden')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
