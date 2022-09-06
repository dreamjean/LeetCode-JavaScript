/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  const spaces = text.split('').filter(x => x === ' ').length;
  const words = text.trim().split(' ').filter(word => word);
  const n = words.length;
  
  return n === 1
    ? words + ' '.repeat(spaces)
    : words.join(' '.repeat(~~(spaces / (n - 1)))) + ' '.repeat(spaces % (n - 1));
};