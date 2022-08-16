/**
 * @param {number} n
 */
var OrderedStream = function(n) {
  this.prev = 1;
  this.stream = [];
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.stream[idKey] = value;
  if (idKey === this.prev)
    while (this.stream[this.prev]) this.prev++;
  
  return this.stream.slice(idKey, this.prev);
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */