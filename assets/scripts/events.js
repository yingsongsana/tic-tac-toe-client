'use strict'

const gameBoard = ['', '', '', '', '', '', '', '', '']

// keep track of player
let player = 'x'
// swap player
const swapPlayer = function () {
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}


const add = function (event) {
  const click = event.target
  console.log(click)
  const clickId = $(click).prop('id')
  console.log(clickId)
  gameBoard[clickId] = player
  console.log(gameBoard)
  $(click).html(player)
  swapPlayer()
}



// for (let i = 0; i <= 9; i++) {
//   if (gameBoard.length === 0) {
//     userXClick()
//   }
// }

module.exports = {
  add
}
