/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let depth = 0;
  
  for (let log of logs) {
    if (log === './') continue;
    if (log === '../') {
      if (depth) depth--;
      else continue;
    }
    
    else depth++;
  }
    
  return depth;
};