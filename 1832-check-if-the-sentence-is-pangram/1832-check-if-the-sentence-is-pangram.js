/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  const cnt = new Array(26).fill(0);
  
  for (let char of sentence) {
    cnt[char.charCodeAt() - 'a'.charCodeAt()]++;
  }
  
  return cnt.every((num) => num);
};