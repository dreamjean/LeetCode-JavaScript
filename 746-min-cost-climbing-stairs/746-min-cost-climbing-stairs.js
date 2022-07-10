/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let [first, second] = [cost[0], cost[1]];
    
    for (let i = 2; i < n; i++) {
        const tmp = cost[i] + Math.min(first, second);
        [first, second] = [second, tmp];
    }
    
    return Math.min(first, second);
};