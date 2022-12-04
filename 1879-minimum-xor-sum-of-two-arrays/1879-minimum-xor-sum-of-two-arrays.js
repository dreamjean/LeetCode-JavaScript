/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumXORSum = function(nums1, nums2) {
  const n = nums1.length;
  const maxMask = 1 << n;
  const dp = new Array(maxMask).fill(Infinity);
  dp[0] = 0;
  
  for (let i = 0; i < maxMask; ++i) {
    const c = bitCount(i);
    
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) continue;
      
      const mask = i + (1 << j);
      dp[mask] = Math.min(dp[mask], dp[i] + (nums1[c] ^ nums2[j]));
    }
  }
  
  return dp[maxMask - 1];
};

const bitCount = (x) => {
  let cnt = 0;
  
  while (x) {
    cnt++;
    x &= x - 1;
  }
  
  return cnt;
}