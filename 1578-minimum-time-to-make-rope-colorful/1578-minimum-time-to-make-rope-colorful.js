/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  let [ans, max] = [0, neededTime[0]];
  
  for (let i = 1; i < colors.length; i++) {
    if (colors[i - 1] === colors[i]) {
      ans += Math.min(max, neededTime[i]);
      max = Math.max(max, neededTime[i]);
    }
    
    else max = neededTime[i];
  }
  
  return ans;
};