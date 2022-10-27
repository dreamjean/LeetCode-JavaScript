/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let sign = 0;
  
  for (let num of nums) {
    if (!num) return 0;
    sign += num < 0;
  }
  
  return sign % 2 ? -1 : 1;
};