/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
    const [m, n] = [grid.length, grid[0].length];
    const visited = Array.from({ length: m }, () => new Array(n).fill(Number.MAX_VALUE));
    const pq = new MinPriorityQueue({ priority: x => x[0] });
    
    for (let j = 0; j < n; j++)
        pq.enqueue([grid[0][j], 0, j]);
    
    while (!pq.isEmpty()) {
        const [cost, x, y] = pq.dequeue().element;
        if (x === m - 1) return cost;
        
        for (let dy = 0; x + 1 < m && dy < n; dy++) {
            const dx = grid[x][y];
            const newCost = cost + moveCost[dx][dy] + grid[x + 1][dy];
            if (newCost < visited[x + 1][dy]) {
                visited[x + 1][dy] = newCost;
                pq.enqueue([newCost, x + 1, dy]);
            }
        }
    }
    
    return -1;
};