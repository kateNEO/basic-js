const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if((typeof sampleActivity !== ('string' || 'number')) || (sampleActivity < 0) || (typeof sampleActivity === 'object')) return false;
  const toFloat = parseFloat(sampleActivity);
  const k = Math.log(2) / HALF_LIFE_PERIOD;
  let res =Math.ceil(Math.log(MODERN_ACTIVITY / toFloat) / k);
  return res > 0 && Number.isInteger(res) ? res : false


}

module.exports = {
  dateSample
};
