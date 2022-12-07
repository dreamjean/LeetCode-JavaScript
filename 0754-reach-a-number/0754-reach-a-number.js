/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target);
  let [steps, diff] = [0, 0];
  
  while (diff < target || (diff - target) % 2) {
    steps++;
    diff += steps;
  }
  
  return steps;
};