/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  satisfaction.sort((a, b) => b - a);
  let [total, ans] = [0, 0];
  
  for (let num of satisfaction) {
    if (total + num < 0) break;
    
    total += num;
    ans += total;
  }
  
  return ans;
};