/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let [prev1, prev2] = [0, 0];

  for (let num of nums) [prev1, prev2] = [prev2, Math.max(prev2, prev1 + num)];

  return prev2;
};
