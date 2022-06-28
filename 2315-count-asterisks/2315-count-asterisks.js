/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    return s
        .split('|')
        .reduce((cnt, str, i) => cnt += !(i % 2) ? str.replace(/\w/g, '').length : 0, 0)
};