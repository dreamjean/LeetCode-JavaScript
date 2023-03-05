/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  const n = arr.length;
  const visited = new Set();
  const map = {};
  const queue = [0];
  let steps = 0;
  
  for (let i = 0; i < n; i++) {
    const num = arr[i];
    map[num] ? map[num].push(i) : map[num] = [i];
  }
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      const num = arr[curr];
      if (curr === n - 1) return steps;
      
      for (let next of [...map[num], curr - 1, curr + 1]) {
        if (next < 0 || next >= n || visited.has(next)) continue;
        
        visited.add(next);
        queue.push(next);
      }
      
      map[num] = [];
    }
    
    steps++;
  }
};