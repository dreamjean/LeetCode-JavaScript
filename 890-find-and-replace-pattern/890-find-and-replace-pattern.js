/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  return words.filter((word) => countCharator(word) === countCharator(pattern));
};

const countCharator = (word) => {
  const map = new Map();
  const res = [];

  for (let char of word) {
    if (!map.has(char)) map.set(char, map.size);

    res.push(map.get(char));
  }

  return res.join("");
};
