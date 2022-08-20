/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  const n = stations.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = startFuel;
  
  for (let i = 0; i < n; ++i) 
    for (let j = i; j <= n && dp[j] >= stations[i][0]; --j)       
        dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1]);
    
  for (let i = 0; i <= n; i++) 
    if (dp[i] >= target) return i;
  
  return -1;
};