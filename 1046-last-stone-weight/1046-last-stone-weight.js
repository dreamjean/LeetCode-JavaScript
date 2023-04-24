/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones.sort((a, b) => a - b);
  
  while (stones.length > 1) {
    const diff = stones.pop() - stones.pop();
    stones.push(diff);
    stones.sort((a, b) => a - b);
  }
  
  return stones[0];
};