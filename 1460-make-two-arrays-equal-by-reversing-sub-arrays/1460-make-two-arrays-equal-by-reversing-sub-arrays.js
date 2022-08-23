/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  return sortedToStr(target) === sortedToStr(arr);
};

const sortedToStr = arr => arr.sort((a, b) => a - b).join('');