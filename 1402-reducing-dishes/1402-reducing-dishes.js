/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  satisfaction.sort((a, b) => b - a);
  let [total, ans] = [0, 0];
  
  for (let i = 0; i < satisfaction.length; i++) {
    const curr = satisfaction[i];
    if (total + curr < 0) break;
    
    total += curr;
    ans += total;
  }
  
  return ans;
};