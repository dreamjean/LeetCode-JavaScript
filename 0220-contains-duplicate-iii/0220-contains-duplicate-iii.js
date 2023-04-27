/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  const bucket = {};
  const w = valueDiff + 1;
  
  for (let [i, num] of nums.entries()) {
    const idx = Math.floor(num / w);
    if (idx in bucket) return true;
    if (idx - 1 in bucket && Math.abs(num - bucket[idx - 1]) < w)
        return true
    if (idx + 1 in bucket && Math.abs(num - bucket[idx + 1]) < w)
        return true
    
    bucket[idx] = num;
    if (i >= indexDiff) {
      const oldNum = nums[i - indexDiff];
      delete bucket[Math.floor(oldNum / w)];
    }
  }
  
  return false;
};