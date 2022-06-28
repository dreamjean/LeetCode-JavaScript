/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    const visite = new Array(n).fill(false);
    let ans = n * (n - 1) / 2;
    
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    for (let i = 0; i < n; i++) {
        if (!visite[i]) {
            const cnt = dfs(i, visite, graph);
            ans -= cnt * (cnt - 1) / 2;
        }
    }
    
    return ans;
};

const dfs = (start, visite, graph) => {
    visite[start] = true;
    let res = 1;
    
    for (const v of graph[start]) {
        if (!visite[v]) res += dfs(v, visite, graph);
    }
    
    return res;
}