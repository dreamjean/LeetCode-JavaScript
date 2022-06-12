/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const m = _.max(heights);
    const cnt = new Array(m + 1).fill(0);
    let [idx, ans] = [0, 0];
    
    heights.forEach(h => cnt[h]++);
    
    for (let i = 0; i <= m; i++) {
        while (cnt[i]--) heights[idx++] !== i && ++ans;
    }
    
    return ans;
};