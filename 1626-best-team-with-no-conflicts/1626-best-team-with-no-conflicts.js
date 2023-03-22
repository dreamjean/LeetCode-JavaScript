/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
  const person = ages
    .map((age, i) => [age, scores[i]])
    .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  const n = ages.length;
  const dp = new Array(n).fill(0);
  dp[0] = person[0][1];
  
  for (let i = 1; i < n; i++) {
    dp[i] = person[i][1];
    for (let j = 0; j < i; j++) {
      if (person[i][1] >= person[j][1])
        dp[i] = Math.max(dp[i], dp[j] + person[i][1]);
    }
  }
  
  return Math.max(...dp);
};