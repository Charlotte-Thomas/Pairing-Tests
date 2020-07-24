

// create an array with 9 x '_'
// function is given a string - this gets split by ('_')character 
// each character is pushed to the array
// loop where console.log gives only up to an index of 10
// after one iteration array gets shifted down


const startArray = ['_', '_', '_', '_', '_', '_', '_', '_', '_']

function addString(string, spaceAfter, loops) {
  const split = string.split(' ').join('_').split('')
  split.forEach(e => {
    startArray.push(e)
  })
  for (let x = 0; x < spaceAfter; x++) {
    startArray.push('_')
  }
  // console.log(array)
  startTicker(loops)
}

addString('hello world', 3, 4)


function startTicker(loops) {
  console.log(startArray)
  const tempArray = [...startArray]
  for (let x = 0; x < startArray.length; x++) {
    const arrayShown = []
    for (let i = 0; i < 10; i++) {
      arrayShown.push(tempArray[i])
    }

    console.log(arrayShown.join(''))
    if (x > 8) {
      tempArray.push(tempArray[0])
      // console.log('first',tempArray[0])
    } 
    tempArray.shift()
  }
}