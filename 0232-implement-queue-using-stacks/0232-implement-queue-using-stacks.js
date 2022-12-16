
var MyQueue = function() {
  this.input = [];
  this.output = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.output.length)
    while (this.input.length) this.output.push(this.input.pop());
  
  return this.output.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const x = this.pop();
  this.output.push(x);
  
  return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.input.length && !this.output.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */