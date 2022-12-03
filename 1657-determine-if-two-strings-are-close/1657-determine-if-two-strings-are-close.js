/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  const cnt1 = countChar(word1);
  const cnt2 = countChar(word2);
  
  if (Object.keys(cnt1).some((char) => !cnt2[char])) return false;
  
  return sortedToString(cnt1) === sortedToString(cnt2);
};
  
const countChar = (word) => word.split('').reduce((acc, curr) => (acc[curr] ? acc[curr]++ : acc[curr] = 1, acc), {});

const sortedToString = (map) => Object.values(map).sort((a, b) => b - a).join('');