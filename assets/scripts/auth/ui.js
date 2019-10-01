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

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Signed up failed')
}

const onSignInSuccess = function (data) {
  successMessage('Signed in successfully!')
  store.user = data.user
  // console.log(store.user)
}

const onSignInFailure = function () {
  failureMessage('Signed in failed')
}

const onChangePasswordSuccess = function (data) {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function () {
  failureMessage('Changed password failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  store.user = ''
  // console.log(store.user)
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
