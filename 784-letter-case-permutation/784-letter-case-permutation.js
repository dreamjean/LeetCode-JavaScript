/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const q = [s];
    
    for (let i = 0; i < s.length; i++) {
        if (/[0-9]/.test(s[i])) continue;
        
        const size = q.length;
        for (let j = 0; j < size; j++) {
            const str = q.shift();           
            q.push(str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1));
            q.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
        }
    }
    
    return q;
};