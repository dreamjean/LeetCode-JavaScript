/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const n = salary.length;
  const min = Math.min(...salary);
  const max = Math.max(...salary);
  const sum = salary.reduce((a, b) => a + b);

  return (sum - min - max) / (n - 2);
};
