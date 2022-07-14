/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    
    const backtrack = (start = 0, path = []) => {
        ans.push([...path]);
        
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            
            backtrack(i + 1, [...path, nums[i]]);
        }
    }
    
    backtrack();
    
    return ans;
};