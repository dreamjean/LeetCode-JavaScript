/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];
    
    const backtrack = (start = 0, path = []) => {
        ans.push([...path]);
        
        for (let i = start; i < nums.length; i++) {
            backtrack(i + 1, [...path, nums[i]]);
        }
    }
    
    backtrack();
    
    return ans;
};