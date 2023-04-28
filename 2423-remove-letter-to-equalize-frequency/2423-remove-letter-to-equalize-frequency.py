/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
  let count = new Array(26).fill(0);
  
  for (let ch of word) count[ch.charCodeAt() - 'a'.charCodeAt()]++;
  
  for (let i = 0; i < count.length; i++) {
    if (!count[i]) continue;
    
    count[i]--;
    
    const set = new Set(count);
    if (set.size === 1 || (set.size === 2 && set.has(0))) return true;
    
    count[i]++;
  }
  
  return false;
};

