/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  words.sort((a, b) => a.length - b.length);
  const map = {};
  
  for (let word of words) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      const newWord = word.slice(0, i) + word.slice(i + 1);
      if (newWord in map) count = Math.max(count, map[newWord]);
    }
    
    map[word] = count + 1;
  }
  
  return Math.max(...Object.values(map));
};