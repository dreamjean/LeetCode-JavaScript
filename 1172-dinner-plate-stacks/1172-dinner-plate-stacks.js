/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
  this.capacity = capacity;
  this.stacks = [];
  this.pq = new MinPriorityQueue();
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
  if (!this.pq.isEmpty() && this.pq.front().element >= this.stacks.length) this.pq.clear();
  if (!this.pq.isEmpty()) {
    const top = this.pq.front().element;
    this.stacks[top].push(val);
    
    if (this.stacks[top].length === this.capacity) this.pq.dequeue();
  }
  else {
    this.stacks.push([val]);
    if (this.capacity > 1) this.pq.enqueue(this.stacks.length - 1);
  }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
  return this.popAtStack(this.stacks.length - 1);
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
  if (index < 0 || index >= this.stacks.length || !this.stacks[index].length)
    return -1;
  
  if (this.stacks[index].length === this.capacity) this.pq.enqueue(index);
  
  const val = this.stacks[index].pop();
  
  while (this.stacks.length && !this.stacks.at(-1).length) this.stacks.pop();
  
  return val;
};

/** 
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */