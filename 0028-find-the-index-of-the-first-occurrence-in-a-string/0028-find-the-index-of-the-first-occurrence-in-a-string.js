/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const n = needle.length;
  
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + n) === needle) return i;
  }
  
  return -1;
};