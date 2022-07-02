/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const [m, n] = [grid.length, grid[0].length];
    const dirt = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const queue = [];
    let [count, ans] = [0, 0];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) count++;
            if (grid[i][j] === 2) queue.push([i, j]);
        }
    }
    
    while (queue.length && count) {
        ans++;
        for (let i = queue.length - 1; i >= 0; i--) {
            const [x, y] = queue.shift();
            for (const [dx, dy] of dirt) {
                const [nx, ny] = [x + dx, y + dy];
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] !== 1) continue;
                
                count--;
                grid[nx][ny] = 2;
                queue.push([nx, ny]);    
            }
        }
    }
    
    return !count ? ans : -1;
};