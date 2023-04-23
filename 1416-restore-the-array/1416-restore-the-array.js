/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
  const dp = new Array(s.length).fill(-1);
  
  return dfs(0, s, k, dp);
};

const dfs = (i, s, k, dp) => {
  if (i === s.length) return 1;
  if (s[i] === '0') return 0;
  if (dp[i] !== -1) return dp[i];
  
  let [ans, num] = [0, 0];
  for (let j = i; j < s.length; j++) {
    num = num * 10 + +s[j];
    if (num > k) break;
    ans = (ans + dfs(j + 1, s, k, dp)) % (10 ** 9 + 7);
  }
  
  return dp[i] = ans;
}