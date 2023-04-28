/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
  let count = new Array(26).fill(0);
  
  for (let ch of word) count[ch.charCodeAt() - 'a'.charCodeAt()]++;
  
  count = filter(count);
  
  for (let i = 0; i < count.length; i++) {
    count[i]--;
    
    const set = new Set(filter(count));
    if (set.size === 1) return true;
    
    count[i]++;
  }
  
  return false;
};

const filter = (nums) => nums.filter(x => x);