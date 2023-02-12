/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  const indexs = [];
  let [x0, y0, ans] = [0, 0, ''];
  
  for (let ch of target) {
    const i = ch.charCodeAt() - 'a'.charCodeAt();
    indexs.push([Math.floor(i / 5), i % 5]);
  }
  
  for (let [x, y] of indexs) {
    if (y0 > y) ans += 'L'.repeat(y0 - y);
    if (x0 > x) ans += 'U'.repeat(x0 - x);
    if (x0 < x) ans += 'D'.repeat(x - x0);    
    if (y0 < y) ans += 'R'.repeat(y - y0);
    
    ans += '!';
    [x0, y0] = [x, y];
  }
  
  return ans;
};