/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let [low, high] = [1, n];

  while (low < high) {
    const mid = low + ((high - low) >> 1);
    const pick = guess(mid);
    if (pick === 1) low = mid + 1;
    else high = mid;
  }

  return low;
};
