/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const output = [];
    const need = [];
    let [l, r, cnt] = [0, 0, p.length];
    
    for (let c of p) 
        need[c] ? need[c]++ : need[c] = 1;
    
    while (r < s.length) {
        if (need[s[r++]]-- > 0) cnt--;
        if (!cnt) output.push(l);
        
        while (r - l === p.length) 
            if (need[s[l++]]++ >= 0) cnt++;
    }
    
    return output;
};
