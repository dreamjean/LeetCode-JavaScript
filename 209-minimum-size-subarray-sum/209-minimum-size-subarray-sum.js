/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let [left, right, sum, res] = [0, 0, 0, Infinity];
    
    while (right < nums.length) {
        sum += nums[right++];
        while (sum >= target) {
            res = Math.min(res, right - left);
            sum -= nums[left++];     
        }
    }
    
    return res === Infinity ? 0 : res;
};