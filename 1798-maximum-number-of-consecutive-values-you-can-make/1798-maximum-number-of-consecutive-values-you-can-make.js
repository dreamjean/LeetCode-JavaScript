/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
  coins.sort((a, b) => a - b);
  let ans = 1;
  
  for (let coin of coins) {
    if (ans < coin) break;
    
    ans += coin;
  }
  
  return ans;
};