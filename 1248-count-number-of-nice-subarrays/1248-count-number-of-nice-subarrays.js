/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let [j, count, ans] = [0, 0, 0];
  
  nums.forEach((num, i) => {
    if (num & 1) {
      k--;
      count = 0;
    }
    
    while (!k) {
      k += nums[j++] & 1;
      count++;
    }
    
    ans += count;
  })
  
  return ans;
};