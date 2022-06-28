/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
    if (!num) return 0;
    
    for (let i = 1; i <= num && i * k <= num; i++) {
        if ((i * k) % 10 === num % 10) return i;
    }
    
    return -1;
};