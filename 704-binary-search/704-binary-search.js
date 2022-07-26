/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1];
    
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[mid] === target) return mid;
        
        nums[mid] > target ? (right = mid - 1) : (left = mid + 1);
    }
    
    return -1;
};