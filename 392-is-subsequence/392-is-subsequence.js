/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  for (let ch of t) {
    if (ch === s[0]) s = s.substring(1);
  }

  return !s.length;
};
