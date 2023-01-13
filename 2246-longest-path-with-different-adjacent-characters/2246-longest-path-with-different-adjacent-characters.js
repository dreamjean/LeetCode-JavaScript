/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  const n = parent.length;
  const children = Array.from({ length: n }, () => []);
  let ans = 0;
  
  const dfs = (curr) => {
    const pq = new MaxPriorityQueue();

    for (let next of children[curr]) {
      const depth = dfs(next);
      if (s[next] !== s[curr]) pq.enqueue(depth);
    }

    const maxDepth1 = pq.isEmpty() ? 0 : pq.dequeue().element;
    const maxDepth2 = pq.isEmpty() ? 0 : pq.dequeue().element;
    ans = Math.max(ans, maxDepth1 + maxDepth2 + 1);

    return maxDepth1 + 1;
  }
  
  for (let i = 1; i < n; i++) children[parent[i]].push(i);
  
  dfs(0);
  
  return ans;
};

