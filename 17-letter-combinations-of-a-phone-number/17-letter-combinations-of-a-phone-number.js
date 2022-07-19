/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const pad = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const n = digits.length;
    const ans = [];
    
    const dfs = (start = 0, str = '') => {
        if (str.length === n) return ans.push(str);
        
        for (let i = start; i < n; i++) {
            for (let j = 2; j < pad.length; j++) {
                if (j !== +digits[i]) continue;
                
                for (let ch of pad[j]) dfs(i + 1, str + ch);
            }
        }
    }
    
    dfs();
    
    return !n ? [] : ans;
};