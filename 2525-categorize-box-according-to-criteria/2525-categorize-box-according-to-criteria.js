/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
  const volume = length * width * height;
  const [m1, m2] = [10 ** 4, 10 ** 9];
  const bulky = length >= m1 || width >= m1 || height >= m1 || volume >= m2;
  const heavy = mass >= 100;
  
  if (bulky && heavy) return 'Both';
  if (!bulky && !heavy) return 'Neither';
  
  return bulky ? 'Bulky' : 'Heavy';
};