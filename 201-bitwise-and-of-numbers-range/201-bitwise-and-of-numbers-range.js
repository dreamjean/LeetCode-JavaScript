/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  let steps = 0;
    
    while (left < right) {
        left >>= 1;
        right >>= 1;
        steps++;

    }

  return right << steps;
};
