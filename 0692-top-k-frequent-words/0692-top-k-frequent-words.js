/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {};

  words.forEach((word) => (map[word] ? map[word]++ : (map[word] = 1)));

  return Object.entries(map)
    .sort((a, b) => (a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))
    .slice(0, k)
    .map(([word, _]) => word);
};
