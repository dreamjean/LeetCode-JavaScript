/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  return [...words].sort(
    (a, b) => {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === b[i]) continue;
        return order.indexOf(a[i]) - order.indexOf(b[i]);
      }
      
      return a.length - b.length;
    }
  ).join(' ') === words.join(' ');
};