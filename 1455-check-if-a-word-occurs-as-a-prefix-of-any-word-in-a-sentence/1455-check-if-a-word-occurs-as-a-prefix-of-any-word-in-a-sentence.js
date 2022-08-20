/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  return sentence.split(' ').findIndex(word => word.startsWith(searchWord)) + 1 || -1;
};