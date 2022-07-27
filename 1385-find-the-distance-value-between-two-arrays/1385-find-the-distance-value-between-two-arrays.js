/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    return arr1.reduce((acc, curr) => acc += arr2.every(num => Math.abs(curr - num) > d) ? 1 : 0, 0)
};