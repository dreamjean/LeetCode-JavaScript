/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let [res, cntOnes] = [0, 0];
    
    for (let i = 0; i < s.length; i++)
        s[i] === '1' ? cntOnes++ : res = Math.min(res + 1, cntOnes);
    
    return res;
};