/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  let [start, tank, total] = [0, 0, 0];
  
  for (let i = 0; i < n; i++) {
    const curr = gas[i] - cost[i];
    tank += curr;
    total += curr;
    if (tank < 0) [start, tank] = [i + 1, 0];
  }
  
  return total >= 0 ? start : -1;
};