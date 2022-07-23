/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (connections.length < n - 1) return -1;
    
    const seen = new Array(n).fill(0);
    const graph = Array.from({ length: n }, () => new Set());
    let count = 0;
    
    for (const [a, b,] of connections) {
        graph[a].add(b);
        graph[b].add(a);
    }
    
    const dfs = (curr) => {
        for (const next of graph[curr]) 
            if (!seen[next]++) dfs(next);
    }
    
    for (let i = 0; i < n; i++) 
        if (!seen[i]++ && ++count) dfs(i);
    
    return count - 1;
};