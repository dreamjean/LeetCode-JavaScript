/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let [highest, curr] = [0, 0];
  
  for (let x of gain) {
    curr += x;
    highest = Math.max(highest, curr);
  }
  
  return highest;
};