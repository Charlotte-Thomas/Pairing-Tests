

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function userInput() {
  readline.question('play game? (yes/no)', (input) => {
    if (input === 'yes') {
      startGame()
    }
  })
}


let cards = []
let num = 0
let wins = 0
// change these in order to change the gameplay:
const winsNeeded = 5
const cardIterations = 2 //how many card duplicates
userInput()


function startGame() {
  makeCards(cardIterations)
  cards = shuffle(cards)
  // console.log(cards)
  userGuess()
}

function makeCards(multiply) {
  for (let i = 0; i < multiply; i++) {
    for (let x = 1; x < 11; x++) {
      cards.push(x)
    }
  }
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex
  while (0 !== currentIndex) {
    currentIndex -= 1
    randomIndex = Math.floor(Math.random() * currentIndex)
    
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function userGuess() {
  num = 0
  wins = 0
  check()
  userInput()
}


function check() {
  if (wins === winsNeeded) {
    console.log('you win')
    userInput()
    return
  } else if (num > cards.length - 1) {
    console.log('you loose')
    userInput()
    return
  }
  console.log(cards[num])
  // console.log(num, num + 1)
  readline.question(`flipped card:${cards[num]} (h/l)`, (input) => {
    if (input === 'h' && cards[num + 1] > cards[num]) {
      console.log('correct')
      num++
      wins++
      check()
    } else if (input === 'l' && cards[num + 1] < cards[num]) {
      console.log('correct')
      num++
      wins++
      check()
    } else {
      console.log('wrong')
      num++
      check()
    }
  })
}



