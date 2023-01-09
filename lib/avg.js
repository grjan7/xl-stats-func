'use strict'

const isNumberArray = require('./utils/isNumberArray')
/**
 * 
 * @param  {...number|number[]} args a series of number
 * @returns {number} average of given series of number
 * 
 */
const avg = (...args) => {
  const inputArray = (args.length == 1 && Array.isArray(args)) ? args[0] : Object.values(args)
  const parsedInput = inputArray.map(num => parseFloat(num.toString()))
  if (isNumberArray(parsedInput)) {
    const size = parsedInput.length
    const sumOfParsedInput = parsedInput.reduce((prev, val, ind, arr) => prev + val)
    const average = sumOfParsedInput / size
    return average
  } else {
    throw new Error('args must be a series of numbers or a number array.')
  }
}
module.exports = avg