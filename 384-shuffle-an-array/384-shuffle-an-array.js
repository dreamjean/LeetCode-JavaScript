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
  const shiffle = [...this.nums];
  const n = shiffle.length;
  const swap = (i, j) => ([shiffle[i], shiffle[j]] = [shiffle[j], shiffle[i]]);

  for (let i = 0; i < n; i++) swap(i, ~~(Math.random() * n));

  return shiffle;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
