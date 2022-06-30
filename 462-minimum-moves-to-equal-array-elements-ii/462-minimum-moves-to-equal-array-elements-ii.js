/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const medium = nums[~~(n / 2)];
    
    return nums.reduce((cnt, num) => cnt += Math.abs(medium - num), 0);
};