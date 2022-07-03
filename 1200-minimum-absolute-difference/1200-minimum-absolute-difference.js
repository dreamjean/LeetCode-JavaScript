/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = arr.at(-1) - arr[0];
    let ans = [];
    
    for (let i = 1; i < arr.length; i++) {
        const [prev, curr] = [arr[i - 1], arr[i]];
        const diff = curr - prev;
        if (diff === minDiff) ans.push([prev, curr]);
        else if (diff < minDiff) {
            ans = [[prev, curr]];
            minDiff = diff;
        }
    }
    
    return ans;
};