/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  return words.filter((word) => replaceToNum(word) === replaceToNum(pattern));
};

const replaceToNum = (word) => {
  const map = new Map();
  let num = "";

  for (let char of word) {
    if (!map.has(char)) map.set(char, map.size);

    num += map.get(char).toString();
  }

  return num;
};
