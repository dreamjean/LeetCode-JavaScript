/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(-1);
    const stack = [];
    
    for (let i = 0; i < n * 2; i++) {
        const j = i % n;
        const num = nums[j];
        while (stack.length && nums[stack.at(-1)] < num) 
            ans[stack.pop()] = num;
        
        stack.push(j);
    }
    
    return ans;
};