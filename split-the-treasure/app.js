
// can only have crew <= gems.length
// total must be divisible by a whole number which ranges within gems.length
// if it's divisible by gems.length then every number must be the same 

function checkMaxLength(treasure) {
  const treasureTotal = treasure.reduce((prev, next) => {
    return prev + next
  })
  let totalNeeded = 0
  treasure.forEach(t => {
    if (treasureTotal / treasure.length === t) {
      totalNeeded++
    }
  })
  if (totalNeeded === treasure.length) {
    // console.log(`divide by ${treasure.length} people`)
  }

  checkPossibilities(treasure, treasureTotal)
}

// checkMaxLength([4, 1, 5])
// checkMaxLength([3, 4, 5])
// checkMaxLength([2, 2, 6])
// checkMaxLength([1, 1, 3, 5])
// checkMaxLength([1, 1, 3, 7])
checkMaxLength([1, 3, 4, 10, 10])



function checkPossibilities(treasure, total) {
  // console.log(treasure.sort((a, b) => a - b))
  const sortedTreasure = treasure.sort((a, b) => a - b)
  for (let i = 2; i < treasure.length + 1; i++) {
    if (total % i === 0) {
      // console.log(`${total} can be divided by ${i}`)
      checkCrew(sortedTreasure, total, i)
    } else return
  }
}

function checkCrew(treasure, total, division) {
  const numToReach = total / division
  console.log('reach', numToReach)

  const combination = []
  const onesToAdd = []
  let totalArray = treasure[0]

  treasure.forEach((gem, index) => {
    // when it's not directly divisible by division - going upwards:
    if (totalArray > treasure[index + 1]) {
      for (let x = 0; x < index; x++) {
        combination.push(treasure[x])
      }
      for (let x = treasure.length - 1; x > index - 1; x--) {
        onesToAdd.push(treasure[x])
      }
      console.log(combination)
      console.log(onesToAdd)
      complexFunction(combination, onesToAdd)
    }
    // will lead to the direct division being possible (not sure if it accounts for all possibilities):
    console.log(totalArray)
    totalArray += treasure[index + 1]
    if (totalArray === numToReach) {
      console.log(`split by ${division} people`)
      return
    }
  })
}

function complexFunction() {
  console.log('to be continued')
}