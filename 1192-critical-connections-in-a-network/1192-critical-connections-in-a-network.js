/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    const graph = Array.from({ length: n }, () => []);
    const used = new Array(n).fill(false);
    const fup = new Array(n).fill(-1);
    const tin = new Array(n).fill(-1);
    const ans = [];
    let time = 0;
    
    const dfs = (curr, prev = -1) => {
        used[curr] = true;
        tin[curr] = fup[curr] = time++;
        
        for (const next of graph[curr]) {
            if (next === prev) continue;
            
            if (!used[next]) {
                dfs(next, curr);
                fup[curr] = Math.min(fup[curr], fup[next]);
            }
            
            else fup[curr] = Math.min(fup[curr], tin[next]);
            
            if (fup[next] > tin[curr]) ans.push([curr, next]);
        }
    }
   
    
    for (const [u, v] of connections) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    for (let i = 0; i < n; i++) {
        if (!used[i]) dfs(i);
    }
    
    return ans;
};

