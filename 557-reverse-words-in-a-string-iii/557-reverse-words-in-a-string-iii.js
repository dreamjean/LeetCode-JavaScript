/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => word = reverseString(word)).join(' ');
};

const reverseString = str => {
    const arr = str.split('');
    let [l, r] = [0, arr.length - 1];
    
    while (l < r) {
        [arr[l++], arr[r--]] = [arr[r], arr[l]];
    }
    
    return arr.join('');
}