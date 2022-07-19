/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = [1];
    
    if (!rowIndex) return ans;
    
    for (let i = 1; i <= rowIndex; i++) {
        const row = [];
        for (let j = 0; j <= i; j++)
            row.push((ans[j - 1] || 0) + (ans[j] || 0));
        
        ans = [...row];
    }
    
    return ans;
};