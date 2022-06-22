/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let [left, right, maxLen] = [0, 0, 0];
    
    while (right < s.length) {
        set.has(s[right]) ? set.delete(s[left++]) : set.add(s[right++]);
        maxLen = Math.max(maxLen, set.size);
    }
    
    return maxLen;
};