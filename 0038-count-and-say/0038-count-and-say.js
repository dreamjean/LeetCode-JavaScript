/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let ans = '1';
  
  for (let i = 1; i < n; i++) ans = countOnce(ans);
  
  return ans;
};

const countOnce = (str) => {
  let [ans, curr, cnt] = ['', str[0], 0];
  
  for (let c of str) {
    if (c !== curr) {
      ans += `${cnt}${curr}`;
      curr = c;
      cnt = 0;
    }
    
    cnt++;
  }
  
  return ans + `${cnt}${curr}`;
}