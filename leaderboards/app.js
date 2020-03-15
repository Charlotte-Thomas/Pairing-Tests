

const leaderboard = {
  1: ['name', 20, 1],
  2: ['name', 10, 2],
  3: ['name', 5, 3],
  4: ['name', 2, 4],
  5: ['name', 1, 5]
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function inputName() {
  readline.question('your name', (input) => {
    // console.log(input)
    inputScore(input)
  })
}

function inputScore(name) {
  readline.question('your score', (input) => {
    console.log(name, parseInt(input))
    console.log(leaderboard[5][1])
    if (input > leaderboard[5][1]) {
      console.log('larger')
      checkAllScores(name, parseInt(input))
    }
  })
}
inputName()

function checkAllScores(name, score) {
  console.log('active')
  let tempNum = leaderboard[5]
  leaderboard[5] = [name, score, 5]
  for (let x = 4; x > 0; x--) {
    tempNum = leaderboard[x]
    tempNum[2] = x + 1
    if (score > leaderboard[x][1]) {
      leaderboard[x + 1] = tempNum
      leaderboard[x] = [name, score, x]
      console.log(tempNum)
    } else return console.log(leaderboard)
  }
}





// function checkAllScores(name, playerScore) {
//   // for (const score in leaderboard) {
//   // console.log(leaderboard[score])
//   for (let y = 0; y < 5; y++) {
//     if (playerScore > leaderboard[y][1]) {
//       const temp = leaderboard[y]
//       leaderboard[y] = [name, playerScore, y]
//       // console.log(leaderboard)
//       pushDown(y, temp)
//       return
//     }
//   }
//   // }
// }

// function pushDown(i, temp) {
//   const prevScore = leaderboard
//   console.log('prev', prevScore)
//   for (const score in leaderboard) {
//     if (parseInt(score) === i + 1) {
//       temp[2] = i + 1
//       for (let x = 4 - i; x > 0; x--) {
//         leaderboard[i + x + 1] = prevScore[i + x]
//         leaderboard[i + x + 1][2] = x + 2
//       }
//       leaderboard[i + 1] = temp
//     }
//   }
//   console.log(leaderboard)
// }