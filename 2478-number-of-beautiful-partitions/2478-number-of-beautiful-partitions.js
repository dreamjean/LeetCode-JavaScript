/**
 * @param {string} s
 * @param {number} k
 * @param {number} minLength
 * @return {number}
 */
var beautifulPartitions = function(s, k, minLength) {
  const mod = 1e9 + 7;
  const n = s.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));
  dp[0][0] = 1;
  
  for (let j = 1; j <= k; j++) {
    let sum = 0;
    for (let i = minLength; i <= n; i++) {
      if (isPrime(+s[i - minLength])) sum = (sum + dp[i - minLength][j - 1]) % mod;
      if (!isPrime(+s[i - 1])) dp[i][j] = sum;
    }
  }
  
  return dp[n][k];
};

const isPrime = (num) => {
  return num === 2 || num === 3 || num === 5 || num === 7;
}