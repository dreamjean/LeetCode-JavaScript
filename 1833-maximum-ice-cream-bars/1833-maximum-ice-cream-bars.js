/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);
  let [sum, count] = [0, 0];
  
  for (let cost of costs) {
    if (sum + cost > coins) return count;
    
    sum += cost;
    count++;
  }
  
  return count;
};