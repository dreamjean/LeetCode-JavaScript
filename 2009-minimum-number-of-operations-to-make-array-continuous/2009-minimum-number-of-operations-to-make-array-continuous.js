/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let [start, window, ans] = [0, 0, n];
  
  nums.forEach((num, i) => {
    while (start < n && num - nums[start] >= n) {
      if (!start || nums[start] !== nums[start - 1]) window--;
      
      start++;
    }
    
    if (i == start || (i > 0 && num !== nums[i - 1])) window++;
    
    ans = Math.min(ans, n - window);
  })
  
  return ans;
};