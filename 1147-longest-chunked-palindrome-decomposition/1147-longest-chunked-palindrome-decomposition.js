/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
  if (!text) return 0;
  
  for (let i = 0; i <= text.length / 2; i++) {
    if (text.slice(0, i) === text.slice(-i)) 
      return 2 + longestDecomposition(text.slice(i, -i));
  }
  
  return 1;
};