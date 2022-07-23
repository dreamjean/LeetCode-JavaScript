/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const [m, n] = [grid.length, grid[0].length];
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    const dirs = [[0, 1, 1], [0, -1, 2], [1, 0, 3], [-1, 0, 4]];
    const pq = new MinPriorityQueue({ priority: x => x[0] });
    pq.enqueue([0, 0, 0]);
    
    while (!pq.isEmpty()) {
        const [cost, r, c] = pq.dequeue().element;
        if (r === m - 1 && c === n - 1) return cost;
        
        if(visited[r][c]) continue;
        visited[r][c] = true;
        
        for (const [dx, dy, dr] of dirs) {
            const [x, y] = [dx + r, dy + c];
            if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) continue;
            
            pq.enqueue([cost + +(grid[r][c] !== dr), x, y]);
        }
    }
};