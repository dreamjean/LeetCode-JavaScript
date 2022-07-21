/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
  return queries.map(([k, trim]) => {
    const newNums = sortedSlice(nums, trim);

    return newNums[k - 1][1];
  });
};

const sortedSlice = (nums, trim) =>
  nums
    .map((num, i) => [num.slice(num.length - trim), i])
    .sort((a, b) => a[0].localeCompare(b[0]));
