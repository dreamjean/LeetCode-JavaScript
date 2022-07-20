/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
    const ans = [];
    
    const backtrack = (arr, path = []) => {
        if (!arr.length) return ans.push([...path]);
        
        let prev = Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === prev) continue;
            
            const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
            backtrack(newArr, [...path, arr[i]]);
            prev = arr[i];
        }
    }
    
    backtrack(nums);
    
    return ans;
};