/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const n = arr.length;
    const max = Math.max(...arr, n + k);
    
    for (let i = 1; i <= max; i++) {
        if (!arr.includes(i)) k--;
        if (!k) return i;
    }
};