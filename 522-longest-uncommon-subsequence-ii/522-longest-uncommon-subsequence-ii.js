/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    strs.sort((a, b) => b.length - a.length);
    const n = strs.length;
    
    for (let i = 0; i < n; i++) {
        let isUncommon = true;
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (isSubSquence(strs[i], strs[j])) {
                isUncommon = false;
                break;
            }
        }
        
        if (isUncommon) return strs[i].length;
    }
    
    return -1;
};

const isSubSquence = (str1, str2) =>
    [...str2].reduce((pos, char) => str1[pos] === char ? pos + 1 : pos, 0) === str1.length;