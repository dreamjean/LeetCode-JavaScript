
var RandomizedSet = function() {
  this.nums = [];
  this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false;
  
  this.nums.push(val);
  this.map.set(val, this.nums.length - 1);
  
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;
  
  const index = this.map.get(val);
  const last = this.nums.length - 1;
  [this.nums[index], this.nums[last]] = [this.nums[last], this.nums[index]];
  this.map.set(this.nums[index], index);
  
  this.nums.pop();
  this.map.delete(val);
  
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */