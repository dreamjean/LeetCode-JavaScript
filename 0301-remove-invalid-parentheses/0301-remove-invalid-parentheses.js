/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const set = new Set();
  const queue = [s];
  const ans = [];
  
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const str = queue.shift();
      if (isValid(str)) ans.push(str);
      if (ans.length) continue;
      
      for (let j = 0; j < str.length; j++) {
        if (/[(/)]/.test(str[j])) {
          const newStr = str.slice(0, j) + str.slice(j + 1);
          if (set.has(newStr)) continue;
          
          set.add(newStr);
          queue.push(newStr);
        }
      }
    }
  }
  
  return ans;
};

const isValid = (s) => {
  let open = 0;
  
  for (let c of s) {
    if (c === '(') open++;
    if (c === ')') open--;
    
    if (open < 0) return false;
  }
  
  return open === 0;
}