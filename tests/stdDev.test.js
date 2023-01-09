'use strict'

const { equal } = require('assert');
const { stdDev } = require('../index.js');

(function () {
  console.log("\nstdDev for an array as an argument\n")

  const _stdDevArray = stdDev([94, 87, 100, 90, 87])
  const isPassed = equal(Math.round(_stdDevArray, 5), Math.round(4.92341345003647, 5)) == undefined ? 'passed' : 'failed'
  console.log(isPassed)

  console.log("\nstdDev for a series of numbers as arguments\n")
  const _stdDev = stdDev(94, 87, 100, 90, 87)
  const isPassed1 = equal(Math.round(_stdDev, 5), Math.round(4.92341345003647, 5)) == undefined ? 'passed' : 'failed'
  console.log(isPassed1)
})()
