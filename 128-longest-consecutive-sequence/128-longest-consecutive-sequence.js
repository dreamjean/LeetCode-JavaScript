/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let ans = 0;
  
  for (let num of set) {
    if (set.has(num - 1)) continue;
    
    let next = num + 1;
    while (set.has(next)) next++;
    
    ans = Math.max(ans, next - num);
  }
  
  return ans;
};