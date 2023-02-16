/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  const count = new Array(101).fill(0);
  let pairs = 0;
  
  nums.forEach((num) => pairs += (++count[num] % 2 ^ 1));
  
  return [pairs, nums.length - pairs * 2];
};