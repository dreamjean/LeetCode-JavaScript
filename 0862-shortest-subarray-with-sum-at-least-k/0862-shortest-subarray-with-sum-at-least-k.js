/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  const n = nums.length;
  const stack = [];
  let [head, tail, ans] = [0, 0, n + 1];
  
  for (let i = 0; i < n; i++) {
    if (i) nums[i] += nums[i - 1];
    if (nums[i] >= k) ans = Math.min(ans, i + 1);
    
    while (head < tail && nums[i] - nums[stack[head]] >= k)
      ans = Math.min(ans, i - stack[head++]);
    
    while (tail && nums[i] <= nums[stack[tail - 1]]) {
      stack.pop();
      tail--;
    }
    
    stack.push(i);
    tail++;
  }
  
  return ans <= n ? ans : -1;
};