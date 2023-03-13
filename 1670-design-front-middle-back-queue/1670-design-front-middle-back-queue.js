
var FrontMiddleBackQueue = function() {
  this.first = [];
  this.second = [];
};

FrontMiddleBackQueue.prototype.balance = function() {
  const { first, second } = this;
  if (first.length > second.length + 1) 
    second.unshift(first.pop());
  if (first.length < second.length)
    first.push(second.shift());
}

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.first.unshift(val);
  this.balance();
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  const { first, second } = this;
  if (first.length > second.length)
    second.unshift(first.pop());
  
  first.push(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.second.push(val);
  this.balance();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  const val = this.first.length ? this.first.shift() : -1;
  this.balance();
  return val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  const val = this.first.length ? this.first.pop() : -1;
  this.balance();
  return val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  const { first, second } = this;
  let val = -1;
  if (second.length) val = second.pop();
  else if (first.length) val = first.pop();
  
  this.balance();
  
  return val;
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */