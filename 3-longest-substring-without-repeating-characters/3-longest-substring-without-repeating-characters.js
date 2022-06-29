/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let [l, r, maxLen] = [0, 0, 0];
    
    while (r < s.length) {
        set.has(s[r]) ? set.delete(s[l++]) : set.add(s[r++]);
        maxLen = Math.max(maxLen, set.size);
    }
    
    return maxLen;
};