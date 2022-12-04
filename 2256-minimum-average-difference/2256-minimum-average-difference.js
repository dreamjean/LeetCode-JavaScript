/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
  const sums = nums.reduce((acc, curr) => (acc.push(acc.at(-1) + curr), acc), [0]);
  const n = nums.length;
  let [minDiff, ans] = [Infinity, -1];
  
  for (let i = 1; i <= n; i++) {
    const [sum1, sum2] = [sums[i], sums[n] - sums[i]];
    const diff = Math.abs(~~(sum1 / i) - (i === n ? 0 : ~~(sum2 / (n - i))));
    if (diff < minDiff) {
      minDiff = diff;
      ans = i - 1;
    }
  }
  
  return ans;
};