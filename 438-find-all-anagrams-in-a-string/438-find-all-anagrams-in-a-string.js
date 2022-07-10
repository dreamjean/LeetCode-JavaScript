/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map = {};
    const ans = [];
    let [l, r, cnt] = [0, 0, p.length];
    
    p.split('').forEach(char => map[char] ? map[char]++ : map[char] = 1);
    
    while (r < s.length) {
        if (map[s[r++]]-- > 0) cnt--;
        if (!cnt) ans.push(l);
        
        while (r - l === p.length) 
            if (++map[s[l++]] > 0) cnt++;
    }
    
    return ans;
};