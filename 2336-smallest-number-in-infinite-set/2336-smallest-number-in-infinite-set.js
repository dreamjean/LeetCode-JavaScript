
var SmallestInfiniteSet = function() {
  this.nums = Array.from({ length: 1000 }, (_, i) => i + 1);
  this.l = 0;
  this.r = 1000;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.l === this.r) return null;

  return this.nums[this.l++];
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  const index = search(this.nums.slice(this.l), num);
  if (index === -1) return;
  
  this.nums.splice(this.l + index, 0, num);
  this.r++;
};
  
const search = (nums, target) => {
  let [l, r] = [0, nums.length];
  
  while (l < r) {
    const mid = (l + r) >>> 1;
    if (nums[mid] === target) return -1;
    
    nums[mid] < target ? (l = mid + 1) : (r = mid);
  }
  
  return l;
}

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */