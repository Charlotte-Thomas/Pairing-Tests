
const axios = require('axios')

const resultsFile = [['Cardiff West', 11014, 'C', 17803, 'L', 4923, 'UKIP', 2069, 'LD'], ['Islington South & Finsbury', 22547, 'L', 9389, 'C', 4829, 'LD', 3375, 'UKIP', 3371, 'G', 309]]

// getResults()

function getResults() {
  console.log('yep')
  axios.get('url')
    .then((resp) => {
      resp.forEach((data) => {
        resultsFile.push(data)
      })
        .catch((error) => console.log(error))
    })
}

// console.log(resultsFile)

const parties = {
  'C': 'Conservative Party',
  'L': 'Labour Party',
  'UKIP': 'UKIP',
  'LD': 'Liberal Democrats',
  'G': 'Green Party',
  'Ind': 'Independent',
  'SNP': 'SNP'
}


resultsFile.forEach((arr, index) => {
  const votes = []
  const partiesArr = []
  let constituencies = 'none'

  constituencies = (arr[0])

  arr.forEach((res, i) => {
    if (i % 2 === 0 && i > 0) {
      partiesArr.push(res)
    } else if (i > 0) (votes.push(res))
  })

  const totalVotes = votes.reduce((prev, next) => {
    return prev + next
  })

  const percentages = votes.map((vote) => {
    return parseFloat((vote / totalVotes * 100).toFixed(2)) + '%'
  })
  // console.log(percentages)

  const resultsAll = []

  
  percentages.forEach((perc, i) => {
    if (i === 0) {
      resultsAll.push(constituencies)
    }
    resultsAll.push([`${parties[partiesArr[i]]} : ${perc}`])
  })

  console.log(resultsAll)
  // console.log(constituencies)


})

// --- check validation -----
// if type is wrong on field then return error saying that the type was wrong (perhaps check which type it is) 
// state what type it needs to be
// check if code entered does not match any in the object and return error with code incorrect
// if statement which only continues with valid types

// ---swing-O-meter -----
// add extra to array which shows the percentage change
// to do this simply take away prev % from current % and add to new array









