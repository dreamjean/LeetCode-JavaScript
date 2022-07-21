/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1);
  const cnt = new Array(n).fill(0);
  let [res, max] = [0, 1];

  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) [count, dp[i]] = [cnt[j], dp[j] + 1];
        else if (dp[j] + 1 === dp[i]) count += cnt[j];
      }
    }

    cnt[i] = count;

    if (dp[i] > max) [res, max] = [count, dp[i]];
    else if (dp[i] === max) res += count;
  }

  return res;
};
