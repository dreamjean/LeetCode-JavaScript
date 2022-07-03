/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const ans = [];
    
    const backtrack = (path = []) => {
        if (path.length === n) return ans.push([...path]);
        
        for (let i = 0; i < n; i++) {
            if (path.includes(nums[i])) continue;
            
            backtrack([...path, nums[i]]);
        }
    }
    
    backtrack();
    
    return ans;
};