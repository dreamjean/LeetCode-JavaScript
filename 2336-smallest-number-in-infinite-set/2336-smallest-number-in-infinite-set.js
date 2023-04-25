
var SmallestInfiniteSet = function() {
  this.nums = Array.from({ length: 1001 }, (_, i) => i);
  this.start = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  while (!this.nums[this.start]) this.start++;
  
  this.nums[this.start] = 0;
  
  return this.start++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  this.nums[num] = num;
  this.start = Math.min(this.start, num);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */