'use strict'

const { covariance } = require('../index.js')
const { equal } = require('assert');

(function () {
  const covar = covariance([3, 2, 4, 5, 6], [9, 7, 12, 15, 17])
  const isPassed = equal(covar, 10) == undefined ? 'passed' : 'failed'
  console.log(isPassed)
})()
