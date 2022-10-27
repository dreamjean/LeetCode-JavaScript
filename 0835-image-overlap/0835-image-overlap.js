/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
  const n = img1.length;
  const set1 = new Set();
  const set2 = new Set()
  let ans = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (img1[i][j] === 1) set1.add(`${i}-${j}`)
      if (img2[i][j] === 1) set2.add(`${i}-${j}`)
    }
  }
  
  for (let i = -(n + 1); i < n; i++) {
    for (let j = -(n + 1); j < n; j++) {
      let cnt = 0;
      set1.forEach((key1) => {
        const [x, y] = key1.split('-');
        const key2 = `${+x + i}-${+y + j}`
        if (set2.has(key2)) cnt++;
      })
      
      ans = Math.max(ans, cnt);
    }
  }
  
  return ans;
};

