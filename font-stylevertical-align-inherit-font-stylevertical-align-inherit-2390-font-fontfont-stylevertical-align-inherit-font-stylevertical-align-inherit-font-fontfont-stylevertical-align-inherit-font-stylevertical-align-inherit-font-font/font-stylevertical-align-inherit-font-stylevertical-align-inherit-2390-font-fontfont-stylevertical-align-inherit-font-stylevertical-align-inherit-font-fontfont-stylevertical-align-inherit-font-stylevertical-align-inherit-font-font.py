/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  return [...s]
    .reduce((acc, curr) => (curr === '*' ? acc.pop() : acc.push(curr), acc), [])
    .join('');
};