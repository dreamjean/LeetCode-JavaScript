/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const seen = new Set(wordList);
  const queue = [[beginWord, 1]];
  
  while (queue.length) {
    const [word, cost] = queue.shift();
    if (word === endWord) return cost;
    
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (!seen.has(newWord)) continue;
        
        seen.delete(newWord);
        queue.push([newWord, cost + 1]);
      }
    }
  }
  
  return 0;
};