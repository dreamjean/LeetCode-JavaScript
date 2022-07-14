/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1) return -1;
    
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];
    const n = grid.length;
    const queue = [[0, 0]];
    let step = 0;
    
    while (queue.length) {
        step++;
        for (let i = queue.length - 1; i >= 0; i--) {
            const [r, c] = queue.shift();
            if (r === n - 1 && c === n - 1) return step;
            
            for (const [dx, dy] of dirs) {
                const [x, y] = [r + dx, c + dy];
                if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] === 1) continue;
                
                grid[x][y] = 1;
                queue.push([x, y]);
            }
        }
    }
    
    return -1;
};
