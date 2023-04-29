/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
  stones.sort((a, b) => a - b);
  const n = stones.length;
  let [j, low] = [0, n];
  let high = Math.max(stones[n - 1] - stones[1], stones[n - 2] - stones[0]) - n + 2;
  
  for (let [i, stone] of stones.entries()) {
    while (stone - stones[j] >= n) j++;
    
    if (i - j === n - 2 && stone - stones[j] === n - 2)
      low = Math.min(low, 2);
    
    else low = Math.min(low, n - (i - j + 1));
  }
  
  return [low, high];
};