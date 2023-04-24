/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  return names
    .map((name, i) => [name, i])
    .sort((a, b) => heights[b[1]] - heights[a[1]])
    .map((x) => x[0])
};