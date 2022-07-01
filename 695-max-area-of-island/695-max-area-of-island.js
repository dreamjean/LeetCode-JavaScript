/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const [m, n] = [grid.length, grid[0].length];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let max = 0;
    
    const dfs = (row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || !grid[row][col]) return 0;
        
        grid[row][col] = 0;
        let res = 1;
        
        for (const [dx, dy] of dirs) 
            res += dfs(row + dx, col + dy);
        
        return res;
    }
    
    for (let i = 0; i < m; i++) 
        for (let j = 0; j < n; j++)
            if (grid[i][j] === 1) max = Math.max(max, dfs(i, j));
    
    return max;
};