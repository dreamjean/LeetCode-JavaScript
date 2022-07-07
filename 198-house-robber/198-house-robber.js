/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let [prev1, prev2] = [0, 0]
    
    for (let num of nums) {
        const tmp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = tmp;
    }
    
    return prev1;
};