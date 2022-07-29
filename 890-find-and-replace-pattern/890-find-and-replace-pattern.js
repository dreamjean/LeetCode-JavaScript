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

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!map.has(char)) map.set(char, map.size);

    res[i] = map.get(char);
  }

  return res.join("");
};
