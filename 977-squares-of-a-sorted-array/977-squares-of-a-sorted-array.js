/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let [l, r] = [0, nums.length - 1];
    const ans = [];
    let p = r;
    
    while (l <= r) {
        ans[p--] = nums[l] ** 2 < nums[r] ** 2 ? nums[r--] ** 2 : nums[l++] ** 2;
    }
    
    return ans;
};