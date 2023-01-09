'use strict'

const { equal } = require('assert');
const { sum } = require('../index.js');

(function () {
  console.log("\nSum for an array as an argument\n")

  const _sumArray = sum([94, 87, 100, 90, 87])
  const isPassed = equal(_sumArray, 458) == undefined ? 'passed' : 'failed'
  console.log(isPassed)

  console.log("\nSum for a series of numbers as arguments\n")
  const _sum = sum(94, 87, 100, 90, 87)
  const isPassed1 = equal(_sum, 458) == undefined ? 'passed' : 'failed'
  console.log(isPassed1)
})()
