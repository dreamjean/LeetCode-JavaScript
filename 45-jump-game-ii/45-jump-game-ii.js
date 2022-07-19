/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let [steps, end, maxPos] = [0, 0, 0];
    
    for (let i = 0; i < nums.length - 1; i++) {
        maxPos = Math.max(maxPos, nums[i] + i);
        
        if (end === i) {
            end = maxPos;
            steps++;
        }
    }
    
    return steps;
};