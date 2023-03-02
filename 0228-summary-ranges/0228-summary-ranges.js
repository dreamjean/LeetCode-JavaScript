/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const ans = [];
  let [start, i] = [0, 1];
  
  while (i <= nums.length) {
    const [numA, numB] = [nums[start], nums[i]];
    if (numB - numA !== i - start) {
      i - start > 1 ? ans.push(`${numA}->${nums[i - 1]}`) : ans.push(`${numA}`);
      start = i;
    }
    
    i++;
  }
  
  return ans;
};