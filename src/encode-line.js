const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let newLine = '';
  let i = 0;
  while (i < str.length) {
    while (str[i] === str[i + count]) {
      count++
    }
    newLine += count === 1 ? str[i] : `${count}${str[i]}`;
    i += count
    count = 1
  }
  return newLine;
}

module.exports = {
  encodeLine
};
