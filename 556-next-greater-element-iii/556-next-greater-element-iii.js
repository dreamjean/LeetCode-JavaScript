/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const digits = [...`${n}`];
    const len = digits.length;
    let i = len - 1;
    
    while (i >= 1 && digits[i - 1] >= digits[i]) i--;
    
    if (!i) return -1;
    
    let j = i;
    while (j + 1 < n && digits[j + 1] > digits[i - 1]) j++;
    
    [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];
    const num = +(digits.slice(0, i).concat(digits.slice(i).reverse()).join(''));
    
    return num > 2 ** 31 - 1 ? -1 : num;
};