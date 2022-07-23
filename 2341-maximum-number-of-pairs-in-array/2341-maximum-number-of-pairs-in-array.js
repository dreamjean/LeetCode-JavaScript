/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const cnt = new Array(101).fill(0);
  let pairs = 0;

  for (let num of nums) pairs += ++cnt[num] % 2 === 0 ? 1 : 0;

  return [pairs, nums.length - pairs * 2];
};
