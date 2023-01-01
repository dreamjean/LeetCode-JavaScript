/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
  const buy = new MaxPriorityQueue({ priority: x => x[0] });
  const sell = new MinPriorityQueue({ priority: x => x[0] });
  const mod = 1e9 + 7;
  let ans = 0;
  
  for (let [price, amount, orderType] of orders) {
    if (!orderType) buy.enqueue([price, amount]);
    else sell.enqueue([price, amount]);
    
    while (!buy.isEmpty() && !sell.isEmpty() && sell.front().element[0] <= buy.front().element[0]) {
      const [bp, ba] = buy.dequeue().element;
      const [sp, sa] = sell.dequeue().element;
      if (ba > sa) buy.enqueue([bp, ba - sa]);
      if (ba < sa) sell.enqueue([sp, sa - ba]);
    }
  }
  
  while (!buy.isEmpty()) { 
    const [_, amount] = buy.dequeue().element;
    ans += amount;
  }
  
  while (!sell.isEmpty()) {
    const [_, amount] = sell.dequeue().element;
    ans += amount;
  }
  
  return ans % mod;
};