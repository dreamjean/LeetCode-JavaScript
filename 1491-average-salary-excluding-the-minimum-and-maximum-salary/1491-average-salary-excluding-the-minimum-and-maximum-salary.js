/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  const n = salary.length;
  let [min, max, sum] = [Infinity, 0, 0];
  
  for (let num of salary) {
    min = Math.min(min, num);
    max = Math.max(max, num);
    sum += num;
  }
  
  return (sum - min - max) / (n - 2);
};