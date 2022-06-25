/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
    return nums.reduce((res, num) => res |= num, 0);
};