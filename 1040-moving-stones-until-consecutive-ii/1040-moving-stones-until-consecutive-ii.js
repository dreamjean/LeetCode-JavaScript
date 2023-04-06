/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
  stones.sort((a, b) => a - b);
  const n = stones.length;
  const high = Math.max(stones[n - 1] - stones[1] - n + 2, stones[n - 2] - stones[0] - n + 2);
  let [i, low] = [0, n];
  
  for (let j = 0; j < n; ++j) {
    while (stones[j] - stones[i] >= n) ++i;
    
    if (j - i + 1 === n - 1 && stones[j] - stones[i] === n - 2)
      low = Math.min(low, 2);
    else low = Math.min(low, n - (j - i + 1));
  }
  
  return [low, high];
};