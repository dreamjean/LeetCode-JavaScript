var StockSpanner = function () {
  this.stock = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  const n = this.stock.length;
  let span = 1;

  for (let i = n - 1; i >= 0; --i) {
    if (this.stock[i] <= price) span++;
    else break;
  }

  this.stock.push(price);

  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
