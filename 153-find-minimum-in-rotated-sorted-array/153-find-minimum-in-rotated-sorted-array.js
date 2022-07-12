/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [left, right] = [0, nums.length - 1];
    
    while (left < right) {
        const mid = (left + right) >>> 1;
        
        nums[mid] > nums[right] ? (left = mid + 1) : (right = mid);
    }
    
    return nums[left];
};