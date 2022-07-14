/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const [m, n] = [grid.length, grid[0].length];
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let count = 0;
    
    const fill = (row, col) => {
        grid[row][col] = '0';

        for (const [dx, dy] of dirs) {
            const [x, y] = [dx + row, dy + col];
            if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0') continue;

            fill(x, y);
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                fill(i, j);
                count++;
            }
        }
    }
    
    return count;
};