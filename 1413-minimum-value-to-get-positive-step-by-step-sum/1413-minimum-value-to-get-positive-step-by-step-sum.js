/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let [sum, min] = [0, 0];
  
  for (let num of nums) {
    sum += num;
    min = Math.min(min, sum);
  }
  
  return 1 - min;
};