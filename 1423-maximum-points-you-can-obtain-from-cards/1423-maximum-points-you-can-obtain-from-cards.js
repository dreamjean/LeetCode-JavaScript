/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length;
    let sum = cardPoints.slice(0, k).reduce((a, b) => a + b);
    let ans = sum;
    
    for (let i = 1; i <= k; i++) {
        sum += cardPoints[n - i] - cardPoints[k - i];
        ans = Math.max(ans, sum);
    }
    
    return ans;
};