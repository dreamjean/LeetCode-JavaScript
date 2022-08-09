/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let [sum, min] = [0, nums[0]];
  
  for (let num of nums) {
    sum += num;
    min = Math.min(min, sum);
  }
  
  return min > 0 ? 1 : 1 - min;
};