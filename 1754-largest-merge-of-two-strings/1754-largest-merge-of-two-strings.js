/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
  let ans = '';
  
  while (word1 && word2) {
    if (word1.localeCompare(word2) > 0) {
      ans += word1[0];
      word1 = word1.slice(1);
    }
    else {
      ans += word2[0];
      word2 = word2.slice(1);
    }
  }
  
  return ans + word1 + word2;
};