/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const max = Math.max(...nums);
  const bucket = new Array(max + 1).fill(0);

  nums.forEach((num) => (bucket[num] += num));

  return helper(bucket);
};

const helper = (arr) => {
  let [prev1, prev2] = [0, 0];

  for (let i = 0; i < arr.length; i++)
    [prev1, prev2] = [prev2, Math.max(prev2, prev1 + arr[i])];

  return prev2;
};
