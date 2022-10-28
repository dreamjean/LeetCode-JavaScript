/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (let str of strs) {
    const key = str.split("").sort().join("");
    map[key] ? map[key].push(str) : (map[key] = [str]);
  }

  return Object.values(map);
};
