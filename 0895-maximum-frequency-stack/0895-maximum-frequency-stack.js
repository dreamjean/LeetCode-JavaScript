var FreqStack = function () {
  this.freq = {};
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  const { freq, stack } = this;
  freq[val] ? freq[val]++ : (freq[val] = 1);

  const num = freq[val];
  if (!stack[num]) stack[num] = [];
  stack[num].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const top = this.stack.at(-1);
  const x = top.pop();
  if (!top.length) this.stack.pop();
  this.freq[x]--;

  return x;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
