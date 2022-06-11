/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const sum = nums.reduce((a, b) => a + b) - x;
    const n = nums.length;
    let [start, end, currSum, diff] = [0, 0, 0, Number.MIN_VALUE];
    
    if (!sum) return n;
    
    while (end < n) {
        currSum += nums[end++];
        
        while (start < end && currSum > sum) currSum -= nums[start++];
        
        if (currSum === sum) diff = Math.max(diff, end - start);
    }
    
    return diff === Number.MIN_VALUE ? -1 : n - diff;
};