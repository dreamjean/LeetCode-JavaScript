/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const [m, n] = [grid.length, grid[0].length];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let count = 0;
    
    const dfs = (r, c) => {
        grid[r][c] = '0';
        
        for (const [dx, dy] of dirs) {
            const [x, y] = [r + dx, c + dy];
            if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0') continue;
            
            dfs(x, y);
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                count++;
            }
        }
    }
    
    return count;
};