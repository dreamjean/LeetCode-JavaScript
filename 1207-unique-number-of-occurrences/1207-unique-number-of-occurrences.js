/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = new Map();
  
  arr.forEach((x) => map[x] ? map[x]++ : map[x] = 1);
  const cnt = Object.values(map).sort((a, b) => a - b);
  
  for (let i = 1; i < cnt.length; i++) {
    if (cnt[i] === cnt[i - 1]) return false;
  }
  
  return true;
};