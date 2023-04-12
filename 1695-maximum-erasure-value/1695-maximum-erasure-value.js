/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  const set = new Set();
  let [j, sum, ans] = [0, 0, 0];
  
  for (let num of nums) {
    sum += num;
    while (set.has(num)) {
      set.delete(nums[j])
      sum -= nums[j++];
    }
    
    set.add(num);
    ans = Math.max(ans, sum);
  }
  
  return ans;
};