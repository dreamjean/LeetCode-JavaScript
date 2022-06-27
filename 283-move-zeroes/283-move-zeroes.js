/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let [start, end] = [0, 1];
    
    while (end < nums.length) {
        if (nums[start] && !nums[end]) start = end;
        else if (!nums[start] && nums[end]) [nums[start++], nums[end]] = [nums[end], nums[start]];
        
        end++;
    }
};