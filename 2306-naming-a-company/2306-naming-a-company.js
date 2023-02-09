/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
  const suffices = Array.from({ length: 26 }, () => new Set());
  let ans = 0;
  
  ideas.forEach((idea) => {
    const [first, second] = [idea[0], idea.slice(1)];
    suffices[first.charCodeAt() - 'a'.charCodeAt()].add(second);
  });
  
  for (let i = 0; i < 25; i++) {
    for (let j = i + 1; j < 26; j++) {
      const [setA, setB] = [suffices[i], suffices[j]];
      const m = getSameCount(setA, setB);
      ans += 2 * (setA.size - m) * (setB.size - m);
    }
  }
  
  return ans;
};

const getSameCount = (setA, setB) => {
  let count = 0;
  
  for (let word of setA) {
    if (setB.has(word)) count++;
  }
  
  return count;
}