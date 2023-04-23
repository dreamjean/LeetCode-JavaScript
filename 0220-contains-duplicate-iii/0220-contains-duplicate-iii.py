/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  const bucket = {};
  
  for (let [i, num] of nums.entries()) {
    const idx = Math.floor(num / (valueDiff + 1));
    if (idx in bucket) return true;
    if ((idx - 1 in bucket) && Math.abs(num - bucket[idx - 1]) <= valueDiff) return true;
    if ((idx + 1 in bucket) && Math.abs(num - bucket[idx + 1]) <= valueDiff) return true;
    
    bucket[idx] = num;
    if (i >= indexDiff) {
      const oldNum = nums[i - indexDiff];
      const oldIdx = Math.floor(oldNum / (valueDiff + 1));
      delete bucket[oldIdx];
    }
  }
  
  return false;
};
