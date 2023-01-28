/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
  const right = [0, 0];
  const left = [0, 0];
  let ans = 0;
  
  nums.forEach((num, i) => right[i % 2] += num);
  
  for (let [i, num] of nums.entries()) {
    right[i % 2] -= num;
    if (left[0] + right[1] === right[0] + left[1]) ans++;
    
    left[i % 2] += num;
  }
  
  return ans;
};