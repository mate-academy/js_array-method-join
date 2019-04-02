'use strict';

/**
 * Implement method join
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function() {
    // write code here
  };
}

module.exports = applyCustomJoin;
