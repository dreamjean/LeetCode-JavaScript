/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let [sum, min, max] = [0, 0, 0];
    
    for (let num of nums) {
        sum += num;
        min = Math.min(min, sum);
        max = Math.max(max, sum);
    }
    
    return max - min;
};