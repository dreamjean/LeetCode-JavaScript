/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const n = nums.length; 
    const dq = [0];
    const dp = [nums[0]];
    
    for (let i = 1; i < n; i++) {
        if (dq[0] + k < i) dq.shift();
        
        dp[i] = nums[i] + dp[dq[0]];
        while (dq.length && dp[dq.at(-1)] <= dp[i]) dq.pop();
        
        dq.push(i);
    }
    
    return dp[n - 1];
};