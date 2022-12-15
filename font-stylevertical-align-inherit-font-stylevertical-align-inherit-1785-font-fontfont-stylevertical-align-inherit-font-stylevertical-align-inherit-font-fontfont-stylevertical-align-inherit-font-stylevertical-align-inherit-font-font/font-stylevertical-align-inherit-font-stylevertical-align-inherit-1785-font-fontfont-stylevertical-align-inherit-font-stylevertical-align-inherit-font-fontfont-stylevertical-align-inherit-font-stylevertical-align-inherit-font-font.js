/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
  const sum = nums.reduce((a, b) => a + b);
  let diff = Math.abs(goal - sum);
  let count = 0;
  
  while (diff) {
    while (diff < limit) limit--;
    
    count += Math.floor(diff / limit);
    diff %= limit;
  }
  
  return count;
};