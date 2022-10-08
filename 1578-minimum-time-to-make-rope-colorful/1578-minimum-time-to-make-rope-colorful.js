/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  let [ans, maxCost] = [0, neededTime[0]];
  
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === colors[i - 1]) {
      ans += Math.min(maxCost, neededTime[i]);
      maxCost = Math.max(maxCost, neededTime[i]);
    }
    else maxCost = neededTime[i];
  }
  
  return ans;
};