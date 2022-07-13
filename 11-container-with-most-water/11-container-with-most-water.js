/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [l, r, max] = [0, height.length - 1, 0];
    
    while (l < r) {
        const [lh, rh] = [height[l], height[r]];
        max = Math.max(max, Math.min(lh, rh) * (r - l));
        
        lh < rh ? l++ : r--;
    }
    
    return max;
};