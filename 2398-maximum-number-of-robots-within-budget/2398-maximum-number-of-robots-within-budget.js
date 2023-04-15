/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
  const queue = [];
  const n = chargeTimes.length;
  let [l, r, start, sum] = [0, -1, 0, 0];
  
  for (let i = 0; i < n; i++) {
    sum += runningCosts[i];
    while (l <= r && chargeTimes[queue[r]] <= chargeTimes[i]) r--;
    
    queue[++r] = i;
    
    if (l <= r && chargeTimes[queue[l]] + (i - start + 1) * sum > budget) {
      if (queue[l] === start) l++;
      
      sum -= runningCosts[start++];
    }
  }
  
  return n - start;
};