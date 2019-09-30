'use strict'

const ui = require('./ui.js')
const gameEvents = require('./game/events.js')
const store = require('./store.js')
const gameUi = require('./game/ui.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

// keep track of player
let play = 'X'
let over = false
// swap player
const swapPlay = function () {
  if (play === 'X') {
    play = 'O'
    ui.currentPlayerOMessage()
  } else {
    play = 'X'
    ui.currentPlayerXMessage()
  }
}

// const startGame = function (event) {
//   $('.game-board').on('click', playNewGame)
// }
// const stopGame = function (event) {
//   $('.game-board').off('click', playNewGame)
// }

const checkForWin = function () {
  if (over === false && gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    gameUi.onWinningX()
    over = true
    //stopGame()
    // need to stop game if there's a winning condition
    // somehow updating store.game.over to true or false ?
  } else if (over === false && gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    gameUi.onWinningX()
    over = true
    //stopGame()
  } else if (over === false && gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    gameUi.onWinningX()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    gameUi.onWinningX()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    gameUi.onWinningX()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    gameUi.onWinningX()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    gameUi.onWinningO()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    gameUi.onWinningO()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    gameUi.onWinningO()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    gameUi.onWinningO()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    gameUi.onWinningO()
    over = true
    // stopGame()
  } else if (over === false && gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    gameUi.onWinningO()
    over = true
    // stopGame()
  } else {
    over = false
    console.log('Keep checking for win')
  }
}

const add = function (event) {
  const click = event.target
  if ($(click).text() === '' && !over) {
    const clickId = $(click).prop('id')
    gameBoard[clickId] = play
    $(click).text(play)
    swapPlay()
    checkForWin()
    console.log('This is ', over)
    gameEvents.onUpdateGame(clickId, play, over)
  } else {
    // square already has X or O
    ui.invalidMoveMessage()
  }
}

const playNewGame = function () {
  if (!store.game) {
    gameUi.onCreateNewGameFailure()
  } else {
    add(event)
  }
}

module.exports = {
  playNewGame
}
