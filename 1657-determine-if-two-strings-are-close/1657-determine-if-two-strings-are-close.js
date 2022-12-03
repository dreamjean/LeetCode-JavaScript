/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  const cnt1 = countChar(word1);
  const cnt2 = countChar(word2);
  
  return !checkKey(cnt1, cnt2) && sortedToString(cnt1) === sortedToString(cnt2);
};
  
const countChar = (word) => word.split('').reduce((acc, curr) => (acc[curr] ? acc[curr]++ : acc[curr] = 1, acc), {});

const checkKey = (cnt1, cnt2) => Object.keys(cnt1).some((char) => !cnt2[char]);

const sortedToString = (map) => Object.values(map).sort((a, b) => b - a).join('');