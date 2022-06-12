/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let [cnt, prev] = [1, nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - prev > k) {
            cnt++;
            prev = nums[i];
        }
    }
    
    return cnt;
};