/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
  const n = piles.length;
  const memo = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));
  
  const dp = (i, k) => {
    if (i === n || !k) return 0;
    if (memo[i][k]) return memo[i][k];
    
    let [ans, sum] = [dp(i + 1, k), 0]
    for (let j = 0; j < Math.min(piles[i].length, k); j++) {
      sum += piles[i][j];
      ans = Math.max(ans, sum + dp(i + 1, k - j - 1));
    }
    
    return memo[i][k] = ans;
  } 
  
  return dp(0, k);
};