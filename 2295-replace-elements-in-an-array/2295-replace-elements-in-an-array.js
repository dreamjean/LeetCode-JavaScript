/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    const map = {};
    
    nums.forEach((num, i) => map[num] = i);
    
    for (const [a, b] of operations) {
        const pos = map[a];
        nums[pos] = b;
        map[nums[pos]] = pos;
    }
    
    return nums;
};