/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  const n = nums.length;
  if (n < 2) return 0;
  
  const [min, max] = [Math.min(...nums), Math.max(...nums)];
  
  if (min === max) return 0;
  
  const d = Math.max(1, Math.floor((max - min) / (n - 1)));
  const bucketSize = Math.floor((max - min) / d) + 1;
  const bucket = Array.from({ length: bucketSize }, () => [-1, -1]);
  let [ans, pos] = [0, -1];
  
  for (let i = 0; i < n; i++) {
    const idx = Math.floor((nums[i] - min) / d);
    if (bucket[idx][0] === -1) bucket[idx] = [nums[i], nums[i]];
    else {
      bucket[idx][0] = Math.min(bucket[idx][0], nums[i]);
      bucket[idx][1] = Math.max(bucket[idx][1], nums[i]);
    }
  }
  
  for (let i = 0; i < bucketSize; i++) {
    if (bucket[i][0] === -1) continue;
    
    if (pos !== -1) ans = Math.max(ans, bucket[i][0] - bucket[pos][1]);
    pos = i;
  }
  
  return ans;
};