/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  const map = {};
  let [ans, source] = [0, 0];
  
  for (let i = 0; i < hours.length; i++) {
    source += hours[i] > 8 ? 1 : -1;
    if (source > 0) ans = i + 1;
    if (!(source in map)) map[source] = i;
    if (source - 1 in map) ans = Math.max(ans, i - map[source - 1]);
  }
  
  return ans;
};