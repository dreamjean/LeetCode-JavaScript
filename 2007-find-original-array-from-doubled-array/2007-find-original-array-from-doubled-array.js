/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
  const n = changed.length;
  if (n & 1) return [];
  
  const cnt = {};
  const ans = [];
  
  changed.forEach((num) => cnt[num] ? cnt[num]++ : cnt[num] = 1);
  Object.keys(cnt).sort((a, b) => a - b);
  
  for (let num of Object.keys(cnt)) {
    if (cnt[num] > (cnt[num * 2] ?? 0)) return [];
    
    for (let i = 0; i < cnt[num]; ++i, cnt[num * 2]--) {
      ans.push(+num);
    }
  }
  
  return ans;
};