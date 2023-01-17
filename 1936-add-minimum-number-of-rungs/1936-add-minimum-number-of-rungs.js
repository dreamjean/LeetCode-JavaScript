/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
  let [prev, ans] = [0, 0];
  
  for (let num of rungs) {
    if (prev + dist < num) ans += Math.floor((num - prev - 1) / dist);
    prev = num;
  }
  
  return ans;
};