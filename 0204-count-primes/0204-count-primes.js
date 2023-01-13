/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const prem = new Array(n).fill(0);
  let ans = 0;
  
  for (let i = 2; i < n; i++) {
    if (prem[i]) continue;
    
    ans++;
    for (let j = i * i; j < n; j += i) prem[j] = 1;
  }
  
  return ans;
};