/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  flowerbed = [0, ...flowerbed, 0];
  
  for (let i = 1; i < flowerbed.length - 1; i++) {
    const [prev, curr, next] = [
      flowerbed[i - 1],
      flowerbed[i],
      flowerbed[i + 1]
    ]
    if (prev + curr + next === 0) {
      --n;
      ++i;
    }
  }
  
  return n <= 0;
};