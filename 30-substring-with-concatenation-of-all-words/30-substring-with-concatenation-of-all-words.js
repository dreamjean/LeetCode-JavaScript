/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const [wordsCount, size] = [words.length, words[0].length];
  const limit = s.length - wordsCount * size;
  const map = {};
  const ans = [];
  
  words.forEach(word => map[word] ? map[word]++ : map[word] = 1);

  for (let i = 0; i <= limit; i++) {
    if (!map[s.slice(i, i + size)]) continue;
    
    const seen = {};
    let [count, j] = [0, i];
    while (count < wordsCount) {
      const sub = s.slice(j, j + size);
      seen[sub] ? seen[sub]++ : seen[sub] = 1;
      if (!map[sub] || seen[sub] > map[sub]) break;
      
      count++;
      j += size;
    }
    
    if (count === wordsCount) ans.push(i);
  }
  
  return ans;
};