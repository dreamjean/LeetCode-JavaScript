/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
  const stack = [];
  let [head, tail, ans] = [0, -1, nums[0]];
  
  for (let i = 0; i < nums.length; i++) {
    nums[i] += head <= tail ? nums[stack[head]] : 0;
    ans = Math.max(ans, nums[i]);
    while (head <= tail && nums[stack[tail]] < nums[i]) {
      stack.pop();
      tail--;
    }
    
    if (nums[i] > 0) stack[++tail] = i;
    if (head <= tail && i - stack[head] >= k) head++;
  }
  
  return ans;
};

