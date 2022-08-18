/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
  const cnt = {};
  const freq = {};
  let [maxF, res] = [0, 0];

  for (let [i, num] of nums.entries()) {
    cnt[num] ? cnt[num]++ : (cnt[num] = 1);
    const a = cnt[num];

    freq[a] ? freq[a]++ : (freq[a] = 1);
    freq[a - 1]--;
    maxF = Math.max(maxF, a);

    if (
      maxF === 1 ||
      maxF * freq[maxF] === i ||
      (maxF - 1) * (freq[maxF - 1] + 1) === i
    )
      res = i + 1;
  }

  return res;
};
