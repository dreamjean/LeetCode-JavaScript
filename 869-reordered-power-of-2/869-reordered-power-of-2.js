/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
  const set = new Set()
  
  for (let i = 0; i < 30; i++)
    set.add(sortedToStr(1<<i));
  
  return set.has(sortedToStr(n));
};
  
const sortedToStr = (n) => String(n).split('').sort().join('');