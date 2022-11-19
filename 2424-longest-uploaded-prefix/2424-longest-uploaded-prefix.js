/**
 * @param {number} n
 */
var LUPrefix = function(n) {
  this.queue = new Array(n).fill(0);
  this.front = 0;
};

/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function(video) {
  this.queue[video - 1] = 1;
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function() {
  while (this.queue[this.front] && this.front < this.queue.length) this.front++;
  
  return this.front;
};

/** 
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */