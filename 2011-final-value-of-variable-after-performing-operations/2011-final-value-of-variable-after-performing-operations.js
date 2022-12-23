/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let x = 0;
  
  for (let op of operations) {
    if (op === 'X++') x++;
    if (op === '++X') ++x;
    if (op === 'X--') x--;
    if (op === '--X') --x;
  }
  
  return x;
};