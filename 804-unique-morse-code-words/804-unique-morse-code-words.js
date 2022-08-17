/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--",
                 "-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  
  return words
    .reduce((acc, curr) => acc.add(toMorseCode(curr, codes)), new Set)
    .size;
};

const toMorseCode = (word, codes) => 
  word.split('').reduce((acc, curr) => acc += codes[curr.charCodeAt() - 'a'.charCodeAt()], '');