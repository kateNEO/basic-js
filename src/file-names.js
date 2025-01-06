const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let correctNames = new Map()
  let count = 0;
  names.forEach(name => {
    if (!correctNames.has(name)) {
      count = 1;
      correctNames.set(name, count)
    } else {
      count = correctNames.get(name)
      correctNames.set(name + '(' + count + ')', count)
      correctNames.set(name, count + 1)
    }
  })
  return Array.from(correctNames.keys())
}

module.exports = {
  renameFiles
};
