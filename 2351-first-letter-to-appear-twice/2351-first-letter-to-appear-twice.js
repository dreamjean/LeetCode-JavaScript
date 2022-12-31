/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  const set = new Set();
  
  for (let ch of s) {
    if (set.has(ch)) return ch;
    
    set.add(ch);
  }
};