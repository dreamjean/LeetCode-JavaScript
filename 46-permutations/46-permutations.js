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
        
        nums.forEach(num => {
            if (!path.includes(num)) 
                backtrack([...path, num])
        })
    }
    
    backtrack();
    
    return ans;
};