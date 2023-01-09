'use strict'

const isNumberArray = (arg) => arg.every(it => (typeof it == 'number' || parseInt(it) != NaN) && it != NaN)

const small = (arr, ind) => {
  if (isNumberArray(arr)) {
    const sortedArray = arr.sort((a, b) => a - b)
    return sortedArray[ind - 1]
  }
}

module.exports = small

//console.log(small([4,5,8,7,11,4,3], 7))