/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const [m, n] = [haystack.length, needle.length];
  
  for (let i = 0; i <= m - n; i++)
    if (haystack.slice(i, i + n) === needle) return i;
  
  return -1;
};