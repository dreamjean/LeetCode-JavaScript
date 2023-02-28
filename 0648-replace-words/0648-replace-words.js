/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  dictionary.sort((a, b) => a.length - b.length);
  
  return sentence.split(' ')
    .map((word) => getNewWord(dictionary, word) || word)
    .join(' ');
};

const getNewWord = (dictionary, word) => dictionary.find((w) => word.startsWith(w));