/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    
    while (n > 1 && !set.has(n)) {
        set.add(n)
        n = sumOfSqure(n);
    }
    
    return n === 1;
};

const sumOfSqure = n => [...`${n}`].reduce((sum, num) => sum += (+num) ** 2, 0);