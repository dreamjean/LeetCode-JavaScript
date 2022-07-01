/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const [len1, len2] = [s1.length, s2.length];
    const cnt = new Array(26).fill(0);
    const a = 'a'.charCodeAt();
    
    for (let i = 0; i < len1; i++) {
        cnt[s1.charCodeAt(i) - a]++;
        cnt[s2.charCodeAt(i) - a]--;
    }
    
    if (cnt.every(num => !num)) return true;
    
    for (let i = len1; i < len2; i++) {
        cnt[s2.charCodeAt(i) - a]--;
        cnt[s2.charCodeAt(i - len1) - a]++;
        if (cnt.every(num => !num)) return true;
    }
    
    return false;
};