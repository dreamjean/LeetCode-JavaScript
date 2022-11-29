
var FreqStack = function() {
  this.stack = [];
  this.freq = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  this.freq[val] ? this.freq[val]++ : this.freq[val] = 1;
  
  const cnt = this.freq[val];
  if (!this.stack[cnt]) this.stack[cnt] = [];
  
  this.stack[cnt].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const top = this.stack[this.stack.length - 1];
  const pop = top.pop();
  if (!top.length) this.stack.pop();
  
  this.freq[pop]--;
  
  return pop;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */