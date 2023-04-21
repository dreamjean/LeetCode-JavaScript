
var RecentCounter = function() {
  this.queue = [];
  this.low = 0;
  this.high = -1;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue[++this.high] = t;
  while (this.queue[this.low] < t - 3000) this.low++;
  
  return this.high - this.low + 1;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */