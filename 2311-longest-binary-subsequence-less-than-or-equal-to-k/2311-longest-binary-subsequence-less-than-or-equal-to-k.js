/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let [cnt, val, pow] = [0, 0, 1];
    
    for (let i = s.length - 1; i >= 0 && val + pow <= k; i--) {
        if (s[i] === '1') {
            cnt++;
            val += pow;
        }
        
        pow <<= 1;
    }
    
    return s.replace(/1/g, '').length + cnt;
};