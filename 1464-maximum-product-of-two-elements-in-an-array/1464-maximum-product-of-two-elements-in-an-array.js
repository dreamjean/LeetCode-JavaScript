/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let [max1, max2] = [0, 0];
  
  for (let num of nums) {
    if (num > max1) [max1, max2] = [num, max1];
    else if (num > max2) max2 = num;
  }
  
  return (max1 - 1) * (max2 - 1);
};