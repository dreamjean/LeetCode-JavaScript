/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let ans = 0;
  
  for (let num of nums) {
    let [start, end] = [num - 1, num];
    if (!set.has(start)) while (set.has(end + 1)) end++;
    
    ans = Math.max(ans, end - start);
  }
  
  return ans;
};