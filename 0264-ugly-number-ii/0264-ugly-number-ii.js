/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const nums = [1];
  let [i, i2, i3, i5] = [1, 0, 0, 0];
  
  while (i < n) {
    const [t2, t3, t5] = [nums[i2] * 2, nums[i3] * 3, nums[i5] * 5];
    nums[i] = Math.min(t2, t3, t5);
    
    if (nums[i] === t2) i2++;
    if (nums[i] === t3) i3++;
    if (nums[i] === t5) i5++;
    i++;
  }
  
  return nums[n - 1];
};