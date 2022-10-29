/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  const cnt = new Array(n + 1).fill(0);
  let [a, b] = [0, 0];

  nums.forEach((num) => cnt[num]++);

  for (let i = 1; i <= n; i++) {
    if (!cnt[i]) b = i;
    if (cnt[i] === 2) a = i;
  }

  return [a, b];
};
