/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = {};
  
  for (let c of s) {
    map[c] ? map[c]++ : map[c] = 1;
  }
  
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [char, cnt]) => acc + char.repeat(cnt), '')
};