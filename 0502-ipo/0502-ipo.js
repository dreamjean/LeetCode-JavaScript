/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  const projects = profits
    .map((profit, i) => [profit, capital[i]])
    .sort((a, b) => a[1] - b[1]);
  const pq = new MaxPriorityQueue();
  let i = 0;
  
  while (k--) {
    while (i < projects.length && projects[i][1] <= w) 
      pq.enqueue(projects[i++][0]);
    
    if (!pq.isEmpty()) w += pq.dequeue().element;
  }
  
  return w;
};