
var SmallestInfiniteSet = function() {
    this.set = new Set();
    for (let i = 1; i <= 1000; i++) this.set.add(i);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    const min = Math.min(...Array.from(this.set));
    this.set.delete(min);
    
    return min;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.set.add(num);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */