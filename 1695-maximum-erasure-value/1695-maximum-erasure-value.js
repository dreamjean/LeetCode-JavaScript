/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    const set = new Set();
    let [l, r, sum, maxSum] = [0, 0, 0, 0];
    
    while (r < nums.length) {
        if (!set.has(nums[r])) {
            sum += nums[r];
            set.add(nums[r++]);
            maxSum = Math.max(sum, maxSum);
        }
        else {
            sum -= nums[l];
            set.delete(nums[l++]);
        }
    }
    
    return maxSum;
};