/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  return words.reduce((acc, curr) => acc + isSubsequences(curr, s), 0);
};

const isSubsequences = (word, s, map = new Map()) => {
  if (map.has(word)) return map.get(word);
  
  let index = -1;
  for (let c of word) {
    index = s.indexOf(c, index + 1);
    if (index === -1) {
      map.set(word, false);
      return false;
    }
  }
  
  map.set(word, true);
  
  return true;
}