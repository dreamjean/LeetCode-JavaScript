/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const dq = [];
    const output = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (dq.length && nums[dq.at(-1)] <= nums[i]) dq.pop();
        
        dq.push(i);
        if (dq[0] === i - k) dq.shift();
        if (i + 1 >= k) output.push(nums[dq[0]]);
    }
    
    return output;
};