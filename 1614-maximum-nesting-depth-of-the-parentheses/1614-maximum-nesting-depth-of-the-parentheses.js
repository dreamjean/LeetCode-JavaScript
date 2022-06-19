/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let [count, max] = [0, 0];
    
    for (let p of s) {
        if (p === '(') {
            count++;
            max = Math.max(max, count);
        }
        
        else if (p === ')') count--;
    }
    
    return max;
};