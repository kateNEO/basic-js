const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    let str = n.split('-')
    if (str.length !== 6) return false
    str = str.join('')
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) < 48 || (str[i].charCodeAt(0) > 57 && str[i].charCodeAt(0) < 65) ||
            str[i].charCodeAt(0) > 70) return false
    }
    return true
}

module.exports = {
  isMAC48Address
};
