'use strict'

const min = (...arg) => {
  const arr = arg == 1 && Array.isArray(arg) ? arg : arg[0]
  let minVal
  for (let i of arr) {
    if (typeof i != 'number' || i == NaN) {

    } else {
      minVal = minVal == undefined ? i : minVal > i ? i : minVal
    }
  }
  return minVal
}

module.exports = min