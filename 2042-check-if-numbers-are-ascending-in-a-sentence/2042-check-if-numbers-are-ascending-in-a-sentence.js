/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const words = s.split(' ');
  let num = 0;
  
  for (let word of words) {
    if (isNaN(word)) continue;
    
    if (+word <= num) return false;
    
    num = +word;
  }
  
  return true;
};