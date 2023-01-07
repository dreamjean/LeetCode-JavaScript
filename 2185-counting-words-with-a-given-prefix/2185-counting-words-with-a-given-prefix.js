/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  return words.reduce((acc, curr) => acc + curr.startsWith(pref), 0);  
};