

const width = 10
const height = 8
const grid = []

let wave = 1
const remove = []
const add = []

for (let i = 0; i < height; i++) {
  const createRow = []
  for (let i = 0; i < width; i++) {
    createRow.push('.')
  }
  grid.push(createRow)
}

// y goes up to 7
// x goes up to 9

grid[1][2] = 'x'
grid[0][4] = 'x'
grid[1][4] = 'x'
grid[4][0] = 'x'
grid[4][3] = 'x'
grid[5][2] = 'x'
grid[6][9] = 'x'
grid[7][7] = 'x'
grid[3][3] = 'x'

createGrid()

function createGrid() {
  remove.splice(0, remove.length)
  add.splice(0, add.length)
  console.log('wave:', wave)
  grid.forEach((row) => {
    console.log(row.join(' '))
  })
  console.log(' ')
}

while (wave < 6) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      checkSurroundings(y, x)
    }
  }
  kill()
  createGrid()
}



function checkSurroundings(y, x) {
  //use consts for directions next time?
  const spot = []
  if (x !== 0 && y !== 0 && x !== 9 && y !== 7) {
    spot.push([y - 1, x - 1, 'TL'], [y - 1, x, 'T'], [y - 1, x + 1, 'TR'], [y, x - 1, 'L'], [y, x + 1, 'R'], [y + 1, x - 1, 'BL'], [y + 1, x, 'B'], [y + 1, x + 1, 'BR'])
  } else if (x !== 0 && y === 0 && x !== 9 && y !== 7) {
    spot.push([y, x - 1, 'L'], [y, x + 1, 'R'], [y + 1, x - 1, 'BL'], [y + 1, x, 'B'], [y + 1, x + 1, 'BR'])
  } else if (x === 0 && y !== 0 && x !== 9 && y !== 7) {
    spot.push([y - 1, x, 'T'], [y - 1, x + 1, 'TR'], [y, x + 1, 'R'], [y + 1, x, 'B'], [y + 1, x + 1, 'BR'])
  } else if (x !== 0 && y !== 0 && x === 9 && y !== 7) {
    spot.push([y - 1, x - 1, 'TL'], [y - 1, x, 'T'], [y, x - 1, 'L'], [y + 1, x - 1, 'BL'], [y + 1, x, 'B'])
  } else if (x !== 0 && y !== 0 && x !== 9 && y === 7) {
    spot.push([y - 1, x - 1, 'TL'], [y - 1, x, 'T'], [y - 1, x + 1, 'TR'], [y, x - 1, 'L'], [y, x + 1, 'R'])
  } else if (x === 0 && y === 0 && x !== 9 && y !== 7) {
    spot.push([y, x + 1, 'R'], [y + 1, x, 'B'], [y + 1, x + 1, 'BR'])
  } else if (x === 0 && y !== 0 && x !== 9 && y === 7) {
    spot.push([y - 1, x, 'T'], [y - 1, x + 1, 'TR'], [y, x + 1, 'R'])
  } else if (x !== 0 && y === 0 && x === 9 && y !== 7) {
    spot.push([y, x - 1, 'L'],[y + 1, x - 1, 'BL'], [y + 1, x, 'B'])
  } else if (x !== 0 && y !== 0 && x === 9 && y === 7) {
    spot.push([y - 1, x - 1, 'TL'], [y - 1, x, 'T'],[y, x - 1, 'L'])
  } 

  let alive = 0
  spot.forEach((s) => {
    if (grid[s[0]][s[1]] === 'x') {
      alive++
    }
  })
  if (alive < 2) {
    remove.push([y, x])
  }
  if (alive > 2) {
    remove.push([y, x])
  }
  if (alive === 3) {
    add.push([y, x])
  }
}

function kill() {
  remove.forEach((s) => {
    grid[s[0]][s[1]] = '.'
  })
  add.forEach((s) => {
    grid[s[0]][s[1]] = 'x'
  })
  wave++
}

