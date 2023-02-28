/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const ans = [];
  
  const pushFromTo = (start, end) => {
    while (start <= end && start <= n) {
      ans.push(start);
      pushFromTo(start * 10, start * 10 + 9);
      start++;
    }
  }
  
  pushFromTo(1, 9);
  
  return ans;
};