/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let cnt = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] <= nums[i]) continue;
        if (i > 1 && nums[i - 2] > nums[i]) nums[i] = nums[i - 1];
        
        cnt++;
    }
    
    return cnt < 2;
};