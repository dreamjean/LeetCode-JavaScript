/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
  tasks = tasks.map(([e, p], i) => [e, p, i]).sort((a, b) => a[0] - b[0]);
  const pq = new PriorityQueue({ 
    compare: (a, b) => {
      if (a[0] > b[0]) return 1;
      if (a[0] < b[0]) return -1;
      return a[1] > b[1] ? 1 : -1;
    }
  })
  
  const n = tasks.length;
  const ans = [];
  let [i, currTime] = [0, tasks[0][0]];
  
  while (i < n || !pq.isEmpty()) {
    if (pq.isEmpty() && currTime < tasks[i][0]) currTime = tasks[i][0];
    
    while (i < n && currTime >= tasks[i][0]) {
      pq.enqueue([tasks[i][1], tasks[i][2]]);
      i++;
    }
    
    const [p, j] = pq.dequeue();
    currTime += p;
    ans.push(j);
  }
  
  return ans;
};