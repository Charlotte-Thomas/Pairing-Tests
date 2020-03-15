

const sandwhichNum = []

let started = false
let log = []

function makeSandwhiches(num, minutes, seconds) {
  let mins = minutes
  let secs = seconds
  let make = true
  let sandwhichStart = 0
  for (let i = 1; i < num + 1; i++) {
    sandwhichNum.push(i)
  }
  console.log(`${mins}:${secs === 0 ? '00' : secs} ${num} sandwich orders placed`)
  log.push((`${mins}:${secs === 0 ? '00' : secs} ${num} sandwich orders placed`))
  if (!started) {
    console.log(`${mins}:${secs === 0 ? '00' : secs} start making sandwich ${1}`)
    log.push(`${mins}:${secs === 0 ? '00' : secs} start making sandwich ${1}`)
    sandwhichStart = 1
    started = true
  } else {
    mins = parseInt(getMins())
    console.log(`${mins}:${secs === 0 ? '00' : secs} start making sandwich ${sandwhichNum.length + 1}`)
    log.push(`${mins}:${secs === 0 ? '00' : secs} start making sandwich ${sandwhichNum.length + 1}`)
    sandwhichStart = sandwhichNum.length + 1
  }
  for (let x = 0; x < num; x++) {
    let last = false
    if (x === num - 1) {
      last = true
    }
    for (let i = 0; i < 2; i++) {
      if (make) {
        mins += 1
        make = false
      } else {
        secs += 30
        if (secs === 60) {
          secs = 0
          mins++
        }
        make = true
      }
      if (make && !last) {
        console.log(`${mins}:${secs === 0 ? '00' : secs} make sandwhich ${sandwhichStart + 1}`)
        log.push(`${mins}:${secs === 0 ? '00' : secs} make sandwhich ${sandwhichStart + 1}`)
      } else if (!make) {
        console.log(`${mins}:${secs === 0 ? '00' : secs} serve sandwhich ${sandwhichStart}`)
        log.push(`${mins}:${secs === 0 ? '00' : secs} serve sandwhich ${sandwhichStart}`)
      } else {
        console.log(`${mins}:${secs === 0 ? '00' : secs} take a break!`)
        log.push(`${mins}:${secs === 0 ? '00' : secs} take a break!`)
      }
    }
    sandwhichStart++
  }
  // sandwhichNum.splice(1, sandwhichNum.length)
  console.log(log)
}


function getMins() {
  console.log('------------------')
  console.log('splitlog', log[log.length - 2].toString().split(' ')[0])
  return log[log.length - 2].toString().split('')[0]
}


makeSandwhiches(4, 0, 0)
makeSandwhiches(2, 2, 0)
makeSandwhiches(2, 7, 0)
// console.log(sandwhichNum)

// console.log(log)

// log.forEach((l) => {
//   // console.log(l.split(' '))
// })

// console.log(log.sort((a, b) => a - b))