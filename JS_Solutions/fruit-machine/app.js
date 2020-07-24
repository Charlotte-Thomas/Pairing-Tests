var prompt = require('prompt')

// prompt.start()

function choice() {
  prompt.get(['PullLever'], function (err, result) {
    console.log('  Pull Lever: ' + result.PullLever)
    if (result.PullLever === 'yes' && playerMoney > 0) {
      startGame()
    }
  })
}

choice()

const fruit = ['black', 'white', 'green', 'yellow']
// const fruit = ['yellow', 'yellow', 'yellow', 'blue']
let playerMoney = 100
let machineMoney = 1000
const outcome = []

function startGame() {
  playerMoney -= 10
  randomise()
  checkMatch()
  console.log('your money =', playerMoney)
  console.log('machine money =', machineMoney)
  outcome.splice(0, outcome.length)
  choice()
}

function randomise() {
  for (let i = 0; i < 4; i++) {
    outcome.push(fruit[parseInt(Math.random() * 4)])
  }
  console.log(outcome)
}

function checkMatch() {
  let count = 0
  for (let i = 0; i < 3; i++) {
    if (outcome[i] === outcome[i + 1]) {
      count++
    }
  }
  console.log(count)
  let allDiff = 0
  fruit.forEach((f) => {
    if (outcome.includes(f)) {
      allDiff++
    }
  })

  if (allDiff === 4) {
    console.log('all diff')
    playerMoney += machineMoney / 2
    machineMoney = machineMoney / 2
  }
  if (count === 1) {
    // one adjacent match
    if (machineMoney < 5 * 10) {
      playerMoney += 500 - machineMoney
    } else {
      playerMoney += 5 * 10
      machineMoney -= 5 * 10
    }
  }
  if (count === 3) {
    console.log('Jackpot')
    playerMoney += machineMoney
    // machineMoney = 0
  }
}


