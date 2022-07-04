/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp = [0, nums[0]];
    
    if (n === 1) return nums[0];
    
    for (let i = 2; i <= n; i++)
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
    
    return dp.pop();
};