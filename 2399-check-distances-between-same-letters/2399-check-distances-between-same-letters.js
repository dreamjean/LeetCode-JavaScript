/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
  const n = s.length;
  
  for (let i = 0; i < n; i++) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt();
    const nextPos = i + distance[index] + 1;
    if (nextPos >= n || s[i] !== s[nextPos]) return false;
    
    distance[index] = -1;
  }
  
  return true;
};