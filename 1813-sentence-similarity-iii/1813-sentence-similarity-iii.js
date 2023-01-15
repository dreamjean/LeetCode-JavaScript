/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  const [word1, word2] = [sentence1.split(' '), sentence2.split(' ')];
  const [n1, n2] = [word1.length, word2.length];
  let i = 0;
  
  if (n1 > n2) return areSentencesSimilar(sentence2, sentence1)
  
  while (i < n1 && word1[i] === word2[i]) i++;
  
  while (i < n1 && word1[i] === word2[n2 - n1 + i]) i++;
  
  return i === n1;
};