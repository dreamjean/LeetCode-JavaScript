/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
  this.graph = Array.from({ length: n }, () => []);
  
  edges.forEach(([u, v, cost]) => this.graph[u].push([v, cost]));
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
  const [u, v, cost] = edge;
  this.graph[u].push([v, cost]);
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
  const pq = new MinPriorityQueue({ priority: x => x[1] });
  const dist = new Array(this.graph.length).fill(Infinity);
  pq.enqueue([node1, 0]);
  dist[node1] = 0;
  
  while (!pq.isEmpty()) {
    const [u, total] = pq.dequeue().element;
    if (u === node2) return total;
    
    for (let [v, cost] of this.graph[u]) {
      const nextTotal = total + cost;
      if (nextTotal < dist[v]) {
        dist[v] = nextTotal;
        pq.enqueue([v, nextTotal]);
      }
    }
  }
  
  return -1;
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */