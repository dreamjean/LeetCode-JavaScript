/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function(nums, numSlots) {
  const maxMask = 1 << (numSlots * 2);
  const dp = new Array(maxMask).fill(0);
  
  for (let i = 0; i < maxMask; ++i) {
    const c = bitCount(i);
    if (c >= nums.length) continue;
    
    for (let j = 0; j < numSlots * 2; ++j) {
      if (i & (1 << j)) continue;
      
      const mask = i | (1 << j);
      dp[mask] = Math.max(dp[mask], dp[i] + ((~~(j / 2) + 1) & nums[c]));
    }
  }
  
  return Math.max(...dp);
};

const bitCount = (x) => {
  let cnt = 0;
  
  while (x) {
    cnt++;
    x &= x - 1;
  }
  
  return cnt;
}