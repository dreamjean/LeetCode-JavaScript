/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
  const [m, n] = [box.length, box[0].length];
  const ans = Array.from({ length: n }, () => new Array(m).fill('.'));
  
  for (let i = 0; i < m; i++) {
    let k = n - 1;
    for (let j = n - 1; j >= 0; j--) {
      if (box[i][j] === '.') continue;
      
      k = box[i][j] === '*' ? j : k;
      ans[k--][m - 1 - i] = box[i][j];
    }
  }
  
  return ans;
};