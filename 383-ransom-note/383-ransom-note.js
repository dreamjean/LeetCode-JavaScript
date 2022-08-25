/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  for (let ch of ransomNote) {
    if (!magazine.includes(ch)) return false;
    
    magazine = magazine.replace(ch, '');
  }
    
  return true;
};