/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let [left, right] = [0, arr.length - 1];

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    arr[mid] < arr[mid + 1] ? (left = mid + 1) : (right = mid);
  }

  return left;
};
