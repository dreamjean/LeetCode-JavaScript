/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let [first, second] = [0, 0];
  
  for (let num of nums) {
    [first, second] = [second, Math.max(first + num, second)];
  }
  
  return second;
};