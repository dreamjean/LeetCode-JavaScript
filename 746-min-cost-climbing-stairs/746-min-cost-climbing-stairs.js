/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let [a, b] = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    const tmp = cost[i] + Math.min(a, b);
    [a, b] = [b, tmp];
  }

  return Math.min(a, b);
};
