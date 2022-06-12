/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let [left, right, sum, res] = new Array(4).fill(0);
    
    while (right < nums.length) {
        sum += nums[right];
        while (sum * (right - left + 1) >= k) sum -= nums[left++];
        
        res += (right - left + 1);
        right++;
    }
    
    return res;
};