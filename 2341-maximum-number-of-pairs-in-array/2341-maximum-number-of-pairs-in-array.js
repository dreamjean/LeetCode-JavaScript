/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  const count = new Array(101).fill(0);
  const ans = [0, 0];
  
  nums.forEach((num) => count[num]++);
  
  for (let x of count) {
    ans[0] += ~~(x / 2);
    ans[1] += x % 2;
  }
  
  return ans;
};