/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const degree = new Array(n).fill(0);
    
    edges.forEach(([_, to]) => degree[to]++);

    return degree.reduce((acc, curr, i) => (!curr && acc.push(i), acc), []);
};