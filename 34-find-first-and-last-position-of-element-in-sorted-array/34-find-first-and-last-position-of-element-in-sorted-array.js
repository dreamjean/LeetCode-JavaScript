/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let [start, end] = [0, nums.length - 1];
    
    while (start <= end) {
        const mid = (start + end) >>> 1;
        if (nums[mid] === target) {
            [start, end] = [mid, mid];
            break;
        }
        
        nums[mid] > target ? (end = mid - 1) : (start = mid + 1);
    }
    
    while (nums[start - 1] === target) start--;
    while (nums[end + 1] === target) end++;
    
    return start > end ? [-1, -1] : [start, end];
};