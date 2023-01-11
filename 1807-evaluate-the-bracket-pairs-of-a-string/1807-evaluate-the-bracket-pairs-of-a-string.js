/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = knowledge.reduce((map, [key, val]) => (map[key] = val, map), {});
  let ans = '';
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      let key = '';
      while (s[++i] !== ')') key += s[i];
      ans += map[key] ?? '?';
    }
    else ans += s[i];
  }
    
  return ans;
};