/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
  const corakPos = { 'c': 0, 'r': 1, 'o': 2, 'a': 3, 'k': 4 };
  const count = new Array(5).fill(0);
  let [frogs, maxFrogs] = [0, 0];
  
  for (let ch of croakOfFrogs) {
    const pos = corakPos[ch];
    count[pos]++;
  
    if (!pos) maxFrogs = Math.max(maxFrogs, ++frogs);
    else if (--count[pos - 1] < 0) return -1;
    else if (pos === 4) frogs--;
  }
  
  return !frogs ? maxFrogs : -1;
};