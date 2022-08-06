/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const set = new Set();

  for (let c of s) set.has(c) ? set.delete(c) : set.add(c);

  return s.length - (!set.size ? 0 : set.size - 1);
};
