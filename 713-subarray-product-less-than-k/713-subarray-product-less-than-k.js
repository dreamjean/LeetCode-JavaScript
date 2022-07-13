/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let [l, r, res, product] = [0, 0, 0, 1];
    
    while (r < nums.length) {
        product *= nums[r];
        while (l <= r && product >= k) product /= nums[l++];
        
        res += r - l + 1;
        r++;
    }
    
    return res;
};