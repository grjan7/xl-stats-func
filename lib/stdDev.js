'use strict'

/**
 * 
 * @param  {...number | number[]} args 
 * @returns standard deviation of a series of numbers
 */
const stdDev = (...args) => {
  const arr = (Array.isArray(args) && args.length == 1) ? args[0] : Object.values(args)
  // formula
  // sqrt(sum((x-avgX) ^ 2)/n)
  const avgX = arr.reduce((prev, val, ind, array) => prev + val) / arr.length
  const xMinusXBarSquaredSum = arr.map((val) => (val - avgX) ** 2).reduce((prev, val, ind) => prev + val)
  const stdDevVal = Math.sqrt(xMinusXBarSquaredSum / arr.length)
  return stdDevVal
}

module.exports = stdDev