/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let [first, second] = [0, 0];
  
  nums.forEach((num) => [first, second] = [second, Math.max(first + num, second)]);
  
  return second;
};