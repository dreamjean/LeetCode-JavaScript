/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const arr = [...this.nums];
  const n = arr.length;
  const swap = (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  for (let i = 0; i < n; i++) swap(i, ~~(Math.random() * n));

  return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
