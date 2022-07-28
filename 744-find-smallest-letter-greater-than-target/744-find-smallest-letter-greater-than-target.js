/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let [left, right] = [0, letters.length - 1];

  while (left <= right) {
    const mid = (left + right) >>> 1;
    letters[mid] > target ? (right = mid - 1) : (left = mid + 1);
  }

  return letters[left] ?? letters[0];
};
