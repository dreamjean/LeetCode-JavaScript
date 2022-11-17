/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  const sum = stones.reduce((a, b) => a + b);
  const volumn = sum >> 1;
  const dp = new Array(volumn + 1).fill(0);
  dp[0] = 1;
  
  for (let stone of stones) {
    for (let i = volumn; i >= stone; --i) {
      dp[i] |= dp[i - stone];
    }
  }
  
  return sum - 2 * dp.lastIndexOf(1);
};