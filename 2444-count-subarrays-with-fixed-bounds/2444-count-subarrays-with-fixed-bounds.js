/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let [ans, lo, hi, bad] = [0, -1, -1, -1];
  
  nums.forEach((num, i) => {
    if (num < minK || num > maxK) bad = i;
    if (num === minK) lo = i;
    if (num === maxK) hi = i;
    
    ans += Math.max(0, Math.min(lo, hi) - bad);
  })
  
  return ans;
};