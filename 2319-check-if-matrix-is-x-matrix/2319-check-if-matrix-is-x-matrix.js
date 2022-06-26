/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    const n = grid.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === j || i + j === n - 1) && !grid[i][j]) return false;
            if ((i !== j && i + j !== n - 1) && grid[i][j]) return false; 
        }
    }
    
    return true;
};