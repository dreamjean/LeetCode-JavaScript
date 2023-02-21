/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  const nums = new Array(n + 1).fill(0);
  let [left, canFarthest, end, count] = [0, 0, 0, 0];
  
  for (let i = 0; i <= n; i++) {
    const range = ranges[i];
    if (!range) continue;
    left = Math.max(0, i - range);
    nums[left] = Math.max(nums[left], i + range);
  }
  
  for (let i = 0; end < n; end = canFarthest) {
    count++;
    while (i <= end) 
      canFarthest = Math.max(canFarthest, nums[i++]);
    
    if (end === canFarthest) return -1;
  }
  
  return count;
};