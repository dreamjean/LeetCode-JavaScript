/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let res = 0;
    
    for (let start of Array.from(set)) {
        if (set.has(start - 1)) continue;
        
        let end = start + 1;
        while (set.has(end)) end++;
        
        res = Math.max(end - start, res);
    }
    
    return res;
};