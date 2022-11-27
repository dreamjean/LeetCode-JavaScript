/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  const n = startTime.length;
  const jobs = startTime
    .map((st, i) => [st, endTime[i], profit[i]])
    .sort((a, b) => a[1] - b[1]);
  const dp = new Array(n + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    const j = binarySearch(jobs[i - 1][0], i - 1, jobs);
    dp[i] = Math.max(dp[i - 1], dp[j] + jobs[i - 1][2]);
  }
  
  return dp[n];
};

const binarySearch = (target, right, jobs) => {
  let left = 0;
  
  while (left < right) {
    const mid = (left + right) >>> 1;
    if (jobs[mid][1] <= target) left = mid + 1;
    else right = mid;
  }
  
  return left;
}