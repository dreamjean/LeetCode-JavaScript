/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    return s
        .split('|')
        .reduce((count, str, i) => 
                count += !(i % 2) ? str.split('').reduce((cnt, c) => cnt += c === '*' ? 1 : 0, 0) : 0, 0)
            
};