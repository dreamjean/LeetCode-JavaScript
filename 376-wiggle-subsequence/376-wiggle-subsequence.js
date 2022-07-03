/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let [up, down] = [1, 1];
    
    for (let i = 1; i < nums.length; i++) {
        const [prev, curr] = [nums[i - 1], nums[i]];
        if (prev < curr) up = down + 1;
        if (prev > curr) down = up + 1;
    }
    
    return Math.max(up, down);
};