/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const cnt = new Array(26).fill(0);
    const a = 'a'.charCodeAt();
    let res = 0;
    
    for (let ch of s) 
        ++cnt[ch.charCodeAt() - a];
    
    cnt.sort((a, b) => b - a);
    
    for (let i = 1; i < 26; ++i) {
        while (cnt[i] && cnt[i] >= cnt[i - 1]) {
            --cnt[i];
            ++res;
        }
    }
    
    return res;
};