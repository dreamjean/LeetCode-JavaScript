/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
  const queue = [s];
  const set = new Set();
  let smallest = s;
  
  while (queue.length) {
    const curr = queue.shift();
    if (curr < smallest) smallest = curr;
    if (!set.has(curr)) {
      set.add(curr);
      queue.push(addA(curr, a), rotate(curr, b));
    }
  }
  
  return smallest;
};

const addA = (s, a) => {
  let newS = '';
  
  for (let i = 0; i < s.length; ++i) {
    newS += (i & 1) ? (+s[i] + a) % 10 : s[i];
  }
  
  return newS;
}

const rotate = (s, b) => s.slice(-b) + s.slice(0, -b);