/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let [low, high] = [0, nums[n - 1] - nums[0]];
  
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (countSmallest(nums, mid) < k) low = mid + 1;
    else high = mid;
  }
  
  return low;
};

const countSmallest = (nums, target) => {
  let [start, count] = [0, 0];
  
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] - nums[start] > target) start++;
    
    count += i - start;
  }
  
  return count;
}