/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const cnt = new Array(26).fill(0);
    const a = 'a'.charCodeAt();
    const ans = [];
    let [left, right, count] = [0, 0, p.length];
    
    for (let c of p) 
        cnt[c.charCodeAt() - a]++;
    
    while (right < s.length) {
        if (cnt[s.charCodeAt(right++) - a]-- > 0) count--;
        if (!count) ans.push(left);
        
        while (right - left === p.length) 
            if (++cnt[s.charCodeAt(left++) - a] > 0) count++;        
    }
    
    return ans;
};