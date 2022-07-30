/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let [low, high] = [1, n];

    while (low <= high) {
      const mid = (low + high) >>> 1;
      isBadVersion(mid) ? (high = mid - 1) : (low = mid + 1);
    }

    return low;
  };
};
