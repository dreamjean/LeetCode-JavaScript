/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;
    let i = n - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) i--;
    
    if (i >= 0) {
        let j = n - 1;
        while (j >= 0 && nums[j] <= nums[i]) j--;
        
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    let [l, r] = [i + 1, n - 1];
    while (l < r) 
        [nums[l++], nums[r--]] = [nums[r], nums[l]];
    
};