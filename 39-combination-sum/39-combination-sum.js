/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    
    const backtrack = (diff, start = 0, path = []) => {
        if (!diff) return ans.push([...path]);
        
        for (let i = start; i < candidates.length; i++) {
            const currDiff = diff - candidates[i];
            if (currDiff < 0) continue;
            
            backtrack(currDiff, i, [...path, candidates[i]]);
        }
    }
    
    backtrack(target);
    
    return ans;
};