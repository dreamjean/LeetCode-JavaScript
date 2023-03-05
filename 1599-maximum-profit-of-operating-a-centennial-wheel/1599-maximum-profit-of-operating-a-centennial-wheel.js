/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
  const n = customers.length;
  let [ans, i, prof, maxProf, wait] = [-1, 0, 0, 0, 0];
  
  while (wait || i < n) {
    if (i < n) wait += customers[i];
    const bd = Math.min(4, wait);
    wait -= bd;
    prof += bd * boardingCost - runningCost;
    i += 1;
    if (prof > maxProf) {
      maxProf = prof;
      ans = i;
    }
  }
  
  return ans;
};