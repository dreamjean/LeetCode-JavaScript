/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = {};
  
  for (let ch of ransomNote) 
    map[ch] ? map[ch]++ : map[ch] = 1;
  
  for (let ch of magazine) {
    if (ch in map) map[ch]--;
  }
  
  return Object.values(map).every(num => num <= 0);
};