/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const map = {};
    let [l, r, maxCount] = [0, 0, 0];

    while (r < s.length) {
        const char = s.charAt(r);
        map[char] ? map[char]++  : map[char] = 1;
        maxCount = Math.max(maxCount, map[char]);

        while (maxCount + k <  r - l + 1) map[s[l++]]--;
        
        r++;
    }

    return r - l;
};
