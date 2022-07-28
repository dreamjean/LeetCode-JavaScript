/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const [m, n] = [grid.length, grid[0].length];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let count = 0;
    
    const dfs = (r, c) => {
        if (grid[r][c]) return true;
        if (!r || r === m - 1 || !c || c === n - 1) return false;
        
        grid[r][c] = 1;
        let res = true;
        
        for (const [dx, dy] of dirs)
            if (!dfs(dx + r, dy + c)) res = false;
        
        return res;
    }
    
    for (let i = 0; i < m; i++) 
        for (let j = 0; j < n; j++)
            if (!grid[i][j]) count += +dfs(i, j);
    
    return count;
};