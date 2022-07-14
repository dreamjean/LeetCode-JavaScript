/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const n = graph.length;
    const ans = [];
    
    const dfs = (curr = 0, path = [0]) => {
        if (curr === n - 1) return ans.push([...path]);
        
        for (let next of graph[curr]) 
            dfs(next, [...path, next]);
    }
    
    dfs();
        
    return ans;
};