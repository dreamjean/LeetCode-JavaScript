/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  const n = arr.length;
  const visited = new Set();
  const map = {};
  let queue = [0];
  let steps = 0;
  
  arr.forEach((num, i) => map[num] ? map[num].push(i) : map[num] = [i]);
  
  while (queue.length) {
    const next = [];
    for (let i of queue) {
      const num = arr[i];
      if (i === n - 1) return steps;
      
      for (let val of map[num]) {
        if (visited.has(val)) continue;
        
        visited.add(val);
        next.push(val);
      }
      
      map[num] = [];
      
      const [l, r] = [i - 1, i + 1];
      if (l >= 0 && !visited.has(l)) {
        visited.add(l);
        next.push(l);
      }
      
      if (r < n && !visited.has(r)) {
        visited.add(r);
        next.push(r);
      }
    }
    
    queue = next;
    steps++;
  }
};