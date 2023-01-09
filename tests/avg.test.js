'use strict'

const { equal } = require('assert');
const { avg } = require('../index.js');

(function () {
  console.log("\nAverage for an array as an argument\n")

  const _avgArray = avg([94, 87, 100, 90, 87])
  const isPassed = equal(_avgArray, 91.6) == undefined ? 'passed' : 'failed'
  console.log(isPassed)

  console.log("\nAverage for a series of numbers as arguments\n")
  const _avg = avg(94, 87, 100, 90, 87)
  const isPassed1 = equal(_avg, 91.6) == undefined ? 'passed' : 'failed'
  console.log(isPassed1)
})()
