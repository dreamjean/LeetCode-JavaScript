/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    return 'b' + 'ab'.slice(n % 2, n % 2 + 1).repeat(n - 1);
};