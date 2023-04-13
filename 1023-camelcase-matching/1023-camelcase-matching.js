/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  return queries.map((query) => isMatched(query, pattern));
};

const isMatched = (str, pattern) => {
  let j = 0;
  
  for (let ch of str) {
    if (ch == pattern[j]) j++;
    else if (ch === ch.toLowerCase()) continue;
    else return false;
  }
  
  return j === pattern.length;
}