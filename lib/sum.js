'use strict'

const isNumberArray = require('./utils/isNumberArray')
/**
 * 
 * @param  {...number|number[]} args 
 * @returns sum of args
 */
const sum = (...args) => {
  const inputArray = (args.length == 1 && Array.isArray(args)) ? args[0] : Object.values(args)
  const parsedInput = inputArray.map(num => parseFloat(num.toString()))
  if (isNumberArray(parsedInput)) {
    const sumOfParsedInput = parsedInput.reduce((prev, val, ind, arr) => prev + val)
    return sumOfParsedInput
  } else {
    throw new Error('args must be a series of numbers or a number array.')
  }
}

module.exports = sum