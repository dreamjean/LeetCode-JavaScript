/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    
    const backtrack = (sum = 0, start = 0, path = []) => {
        if (sum === target) return ans.push([...path]);
        
        for (let i = start; i < candidates.length; i++) {
            const newSum = sum + candidates[i];
            if (newSum > target) continue;

            backtrack(newSum, i, [...path, candidates[i]]);
        }
    }
    
    backtrack();
    
    return ans;
};