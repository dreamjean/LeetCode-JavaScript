/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  const n = salary.length;
  
  return salary
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b) / (n - 2)
};