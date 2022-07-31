/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.n = nums.length;
    this.nums = nums;
    this.bit = new Array(this.n + 1).fill(0);
    
    for (let i = 0; i < this.n; i++)
        this.init(i, this.nums[i]);
};

NumArray.prototype.init = function(i, val) {
    i++;
    while (i <= this.n) {
        this.bit[i] += val;
        i += (i & -i);
    }
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    const diff = val - this.nums[index];
    this.nums[index] = val;
    this.init(index, diff);
};

NumArray.prototype.getSum = function(i) {
    let sum = 0;
    i++;
    while (i) {
        sum += this.bit[i];
        i -= (i & -i);
    }
    
    return sum;
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.getSum(right) - this.getSum(left - 1);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */