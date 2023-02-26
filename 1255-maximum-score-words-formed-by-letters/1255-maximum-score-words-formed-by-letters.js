/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
  const count = new Array(26).fill(0);
  const n = words.length;
  let ans = 0;
  
  letters.forEach((ch) => count[ch.charCodeAt() - 'a'.charCodeAt()]++);
  
  for (let i = 0; i < 1 << n; i++) {
    const wordCount = getWordCount(i, words);
    ans = Math.max(ans, calcScore(count, wordCount, score));
  }
  
  return ans;
};
  
const getWordCount = (i, words) => {
  const count = new Array(26).fill(0);
  
  for (let j = 0; j < words.length; j++) {
    if (!(i & (1 << j))) continue;
    
    for (let ch of words[j])
      count[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }
  
  return count;
}

const calcScore = (count, wordCount, score) => {
  let sum = 0;
  
  for (let i = 0; i < 26; i++) {
    if (count[i] < wordCount[i]) return 0;
    
    sum += wordCount[i] * score[i];
  }
  
  return sum;
}