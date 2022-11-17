/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const max = Math.max(...stones) * stones.length;
  const dp = new Array(max + 1).fill(0);
  let sum = 0;
  dp[0] = 1;

  for (let stone of stones) {
    sum += stone;
    for (let i = Math.min(max, sum); i >= stone; --i)
      dp[i] |= dp[i - stone];
  }

  for (let i = ~~(sum / 2); i >= 0; --i) 
    if (dp[i]) return sum - i - i;

  return 0;
};