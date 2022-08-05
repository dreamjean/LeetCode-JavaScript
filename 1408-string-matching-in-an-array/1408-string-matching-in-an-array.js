/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  return words.filter((word) => isSubstring(word, words));
};

const isSubstring = (str, words) =>
  words.some((word) => word !== str && word.includes(str));
