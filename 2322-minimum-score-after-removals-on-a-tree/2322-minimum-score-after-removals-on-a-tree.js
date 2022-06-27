/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function(nums, edges) {
    const n = nums.length;
    const graph = Array.from({ length: n }, () => []);
    const degree = new Array(n).fill(0);
    const xor = new Array(n).fill(0);
    const out = new Array(n).fill(0);
    const { min, max } = Math;
    let [ans, clock] = [Infinity, 0];
    
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const dfs = (x, fa) => {
        degree[x] = ++clock;
        xor[x] = nums[x];
        
        for (const y of graph[x]) {
            if (y !== fa) {
                dfs(y, x);
                xor[x] ^= xor[y];
            }
        }
        
        out[x] = clock
    }
    
    dfs(0, -1);
    isAncestor = (x, y) => degree[x] < degree[y] && degree[y] <= out[x];
    
    for (let i = 2; i < n; i++) {
        for (let j = 1; j < i; j++) {
            let curr = [];
            if (isAncestor(i, j)) curr = [xor[j], xor[i] ^ xor[j], xor[0] ^ xor[i]];
            else if (isAncestor(j, i)) curr = [xor[i], xor[i] ^ xor[j], xor[0] ^ xor[j]];
            else curr = [xor[i], xor[j], xor[0] ^ xor[i] ^ xor[j]];
            ans = min(ans, max(...curr) - min(...curr));
        }
    }
    
    return ans;
};