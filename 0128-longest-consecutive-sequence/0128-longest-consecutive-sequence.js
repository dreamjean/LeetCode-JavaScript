/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let ans = 0;
  
  for (let num of nums) {
    if (set.has(num - 1)) continue;
    
    let end = num + 1;
    while (set.has(end)) end++;
    
    ans = Math.max(ans, end - num);
  }
  
  return ans;
};