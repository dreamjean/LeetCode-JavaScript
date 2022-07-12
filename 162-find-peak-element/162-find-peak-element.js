/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let [left, right] = [0, nums.length - 1];
    
    while (left < right) {
        const mid = (left + right) >>> 1;
        
        while (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) return mid;
        
        nums[mid] > nums[mid + 1] ? (right = mid) : (left = mid + 1);
    }
    
    return left;
};