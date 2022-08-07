/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const dead = new Set(deadends);
  const seen = new Set(['0000']);
  const queue = [['0000', 0]];
  
  while (queue.length) {
    const [num, cost] = queue.shift();
    if (num === target) return cost;
    
    for (let nextNum of getNextNums(num)) {
      if (dead.has(num) || seen.has(nextNum)) continue;
      
      seen.add(nextNum);
      queue.push([nextNum, cost + 1]);
    } 
  }
  
  return -1;
};

const getNextNums = num => {
  const ans = [];
  
  for (let i = 0; i < num.length; i++) {
    const low = num.slice(0, i) + String((+num[i] + 1) % 10) + num.slice(i + 1);
    const high = num.slice(0, i) + String((+num[i] + 9) % 10) + num.slice(i + 1);
    ans.push(low, high);
  }
  
  return ans;
}