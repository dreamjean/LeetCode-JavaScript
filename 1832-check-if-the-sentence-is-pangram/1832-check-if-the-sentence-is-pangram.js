/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  const set = new Set(sentence);
  
  return set.size === 26;
};