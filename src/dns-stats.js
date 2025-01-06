const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  if(!domains){
    return {}
  }
  let mapDomains = new Map();
  let arr = [];
  let key = '';
  domains.forEach(domain => {
    arr.push(domain.split('.'))
  })
  arr.forEach(domain => {
    for (let i = domain.length-1; i >= 0; i--) {
      key = '.' + domain.slice(i, domain.length).reverse().join('.')
      if (!mapDomains.has(key)) {
        mapDomains.set(key, 1)
      } else {
        mapDomains.set(key, mapDomains.get(key) + 1)
      }

    }
  })
  return Object.fromEntries(mapDomains.entries())
}


module.exports = {
  getDNSStats
};
