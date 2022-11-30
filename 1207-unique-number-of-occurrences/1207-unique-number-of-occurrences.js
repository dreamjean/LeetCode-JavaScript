/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = new Map();
  
  arr.forEach((x) => map[x] ? map[x]++ : map[x] = 1);
  const cnt = Object.values(map);
  
  return cnt.length === new Set(cnt).size;
};