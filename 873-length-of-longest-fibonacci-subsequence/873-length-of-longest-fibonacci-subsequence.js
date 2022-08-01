/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const n = arr.length;
    const set = new Set(arr);
    let ans = 0;
    
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            let [num1, num2, k] = [arr[i], arr[j], 2];
            while (set.has(num1 + num2)) {
                num2 += num1;
                num1 = num2 - num1;
                k++;
            }
            
            ans = Math.max(ans, k);
        }
    }
    
    return ans > 2 ? ans : 0;
};