/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  let [prev, max] = [values[0], -Infinity];
  
  for (let i = 1; i < values.length; i++) {
    max = Math.max(max, prev + values[i] - i);
    prev = Math.max(prev, values[i] + i)
  }
  
  return max;
};