/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map = {};
    const ans = [];
    let [l, r, n] = [0, 0, p.length];
    
    p.split('').forEach(char => map[char] ? map[char]++ : map[char] = 1);
    
    while (r < s.length) {
        if (map[s[r++]]-- > 0) n--;
        if (!n) ans.push(l);
        
        while (r - l === p.length) {
            if (++map[s[l++]] > 0) n++;     
        }
    }
    
    return ans;
};