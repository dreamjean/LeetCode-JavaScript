/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const [m, n] = [mat.length, mat[0].length];
    const dirt = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const queue = [];
    
    for (let i = 0; i < m; i++) 
        for (let j = 0; j < n; j++) 
            !mat[i][j] ? queue.push([i, j]) : mat[i][j] = -1;
    
    while (queue.length) {
        const [row, col] = queue.shift();
        for (const [dx, dy] of dirt) {
            const [x, y] = [row + dx, col + dy];
            if (x < 0 || x >= m || y < 0 || y >= n || mat[x][y] !== -1) continue;
            
            mat[x][y] = mat[row][col] + 1;
            queue.push([x, y]);
        }
    }
     
    return mat;
};