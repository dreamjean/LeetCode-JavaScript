/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let [l, r, sum, ans] = [0, 0, 0, Infinity];
    
    while (r < nums.length) {
        sum += nums[r];
        while (sum >= target) {
            ans = Math.min(ans, r - l + 1);
            sum -= nums[l++];
        }
        
        r++;
    }
    
    return ans === Infinity ? 0 : ans;;
};