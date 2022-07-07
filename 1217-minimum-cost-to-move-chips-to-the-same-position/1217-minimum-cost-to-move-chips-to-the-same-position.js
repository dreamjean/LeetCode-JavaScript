/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    const cnt = [0, 0];
    
    position.forEach(num => cnt[num % 2]++);
    
    return Math.min(cnt[0], cnt[1]);
};