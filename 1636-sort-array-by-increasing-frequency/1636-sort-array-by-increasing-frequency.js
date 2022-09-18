/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = {};

  nums.forEach((num) => (map[num] ? map[num]++ : (map[num] = 1)));

  return nums.sort((a, b) => (map[a] === map[b] ? b - a : map[a] - map[b]));
};
