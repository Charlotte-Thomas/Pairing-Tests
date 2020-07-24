

// create a grid as an arry of arrays with x and y for width and height
// places robot in a set starting position
// implement an input for direction with if statements for directing the robot
// add function which moves the robot
const grid = []
let robotPosition = [4, 4]

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function inputDirection() {
  readline.question('Pick direction - n / e / s / w : ', (resp) => {
    if (resp === 'n') {
      if (robotPosition[0] === 0) {
        return inputDirection()
      }
      console.log('north')
      const previousPosition = [...robotPosition]
      robotPosition = [robotPosition[0] - 1, robotPosition[1]]
      showGrid(previousPosition)
    }
    if (resp === 's') {
      if (robotPosition[0] === 9) {
        return inputDirection()
      }
      console.log('south')
      const previousPosition = [...robotPosition]
      robotPosition = [robotPosition[0] + 1, robotPosition[1]]
      showGrid(previousPosition)
    }
    if (resp === 'e') {
      if (robotPosition[1] === 9) {
        return inputDirection()
      }
      console.log('east')
      const previousPosition = [...robotPosition]
      robotPosition = [robotPosition[0], robotPosition[1] + 1]
      showGrid(previousPosition)
    }
    inputDirection()
  })
}



function createGrid() {
  for (let y = 0; y < 10; y++) {
    const createRow = []
    for (let x = 0; x < 10; x++) {
      createRow.push('.')
    }
    grid.push(createRow)
  }
  addRobot()
  // would then add crates here
  showGrid()
  inputDirection()
}

createGrid()


function addRobot() {
  grid[robotPosition[0]][robotPosition[1]] = '*'
}

function showGrid(prev) {
  if (prev) {
    grid[prev[0]][prev[1]] = '.'
  }
  addRobot()
  grid.forEach((row) => {
    console.log(row.join(' '))
  })
  console.log(' ------------- ')
  // inputDirection()
}






// inputDirection()