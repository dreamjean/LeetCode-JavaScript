/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
  return Math.max(maxSum(nums, firstLen, secondLen), maxSum(nums, secondLen, firstLen));
};

const maxSum = (nums, lenL, lenM) => {
  let [sumL, sumM] = [0, 0];
  
  for (let i = 0; i < lenL + lenM; i++) 
    i < lenL ? sumL += nums[i] : sumM += nums[i];
  
  let [maxL, ans] = [sumL, sumL + sumM];
  
  for (let i = lenL + lenM; i < nums.length; i++) {
    sumL += nums[i - lenM] - nums[i - lenL - lenM];
    maxL = Math.max(maxL, sumL);
    sumM += nums[i] - nums[i - lenM];
    ans = Math.max(ans, maxL + sumM);
  }
  
  return ans;
}