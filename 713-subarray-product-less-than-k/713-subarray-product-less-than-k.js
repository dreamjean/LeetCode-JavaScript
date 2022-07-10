/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (!k) return 0;
    
    let [l, r, product, ans] = [0, 0, 1, 0];
    
    while (r < nums.length) {
        product *= nums[r];
        while (l <= r && product >= k) product /= nums[l++];
        
        ans += r - l + 1;
        r++;
    }
    
    return ans;
};