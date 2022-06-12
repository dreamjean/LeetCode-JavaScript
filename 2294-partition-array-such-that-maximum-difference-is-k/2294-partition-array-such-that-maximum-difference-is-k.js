/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let prev = nums.shift();
    
    return nums.reduce((cnt, num) => {
        if (num - prev > k) {
            cnt++;
            prev = num;
        }
        
        return cnt;
    }, 1)
};