/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.length === t.length && sorted(s) === sorted(t);
};

const sorted = (str) => str.split("").sort().join("");
