/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    const [m, n] = [matrix.length, matrix[0].length];
    const counter = new Map();
    let ans = 0;
    
    for (let i = 0; i < m; i++) 
        for (let j = 1; j < n; j++)
            matrix[i][j] += matrix[i][j - 1];
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            counter.clear();
            counter.set(0, 1);
            let curr = 0;
            
            for (let k = 0; k < m; k++) {
                curr += matrix[k][j] - (i ? matrix[k][i - 1] : 0);
                ans += counter.get(curr - target) || 0;
                counter.set(curr, (counter.get(curr) || 0) + 1);
            }
        }
    }
    
    return ans;
};