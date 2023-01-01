/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(' ');
  const wordsMap = new Map();
  const charsMap = new Map();
  
  if (words.length !== pattern.length) return false;
  
  for (let [i, word] of words.entries()) {
    const char = pattern[i];
    if (
      (wordsMap.has(word) && wordsMap.get(word) !== char) ||
      (charsMap.has(char) && charsMap.get(char) !== word)
    )
      return false;
    
    wordsMap.set(word, char);
    charsMap.set(char, word);
  }
  
  return true;
};