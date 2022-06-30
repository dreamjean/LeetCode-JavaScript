/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const avg = nums[~~(n / 2)];
    
    return nums.reduce((cnt, num) => cnt += Math.abs(avg - num), 0);
};