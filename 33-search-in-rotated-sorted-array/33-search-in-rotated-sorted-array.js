/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1];
    
    while (left <= right) {
        const mid = (left + right) >>> 1;
        if(nums[mid] === target) return mid;
        
        if (nums[mid] > nums[right]) {
            if (nums[left] <= target && nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }
        
        else {
            if (nums[mid] < target && nums[right] >= target) left = mid + 1;
            else right = mid - 1;
        }
    }
    
    return -1;
};