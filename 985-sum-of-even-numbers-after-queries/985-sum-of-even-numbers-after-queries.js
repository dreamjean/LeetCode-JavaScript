/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  const ans = [];
  let evenSum = 0;

  nums.forEach((num) => (evenSum += !(num % 2) ? num : 0));

  for (const [val, i] of queries) {
    if (!(nums[i] % 2)) evenSum -= nums[i];
    if (!((val + nums[i]) % 2)) evenSum += val + nums[i];

    nums[i] += val;
    ans.push(evenSum);
  }

  return ans;
};
