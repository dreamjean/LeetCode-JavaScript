/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let [pos, neg, max] = [0, 0, 0];

  for (let num of nums) {
    if (!num) {
      [pos, neg] = [0, 0];
      continue;
    }

    pos++;
    neg > 0 ? neg++ : (neg = 0);
    if (num < 0) [pos, neg] = [neg, pos];

    max = Math.max(max, pos);
  }

  return max;
};
