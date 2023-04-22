/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  return check(stones);
};

const check = (stones, i = 0, diff = 0, set = new Set()) => {
  const [n, key] = [stones.length, `${i}-${diff}`];
  if (i === n - 1) return true;
  if (set.has(key)) return false;
  set.add(key);
  
  for (let j = i + 1; j < n; j++) {
    const currDiff = stones[j] - stones[i];
    if (currDiff > diff + 1) break;
    if (currDiff >= diff - 1 && currDiff <= diff + 1 && check(stones, j, currDiff, set)) 
      return true;
  }
  
  return false;
}