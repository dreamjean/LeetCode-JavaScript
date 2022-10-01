/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function (s1, s2) {
  const traverse = (idx, s2) => {
    let minTemp = Infinity;

    if (s1 === s2) return 0;
    while (s1[idx] === s2[idx]) idx++;

    for (let i = idx + 1; i < s2.length; i++) {
      if (s2[i] === s1[idx] && s1[i] !== s2[i]) {
        s2 = swap(i, idx, s2);
        const temp = traverse(idx + 1, s2) + 1;
        minTemp = Math.min(minTemp, temp);
        s2 = swap(i, idx, s2);
      }  
    }

    return minTemp;
  };
  
  return traverse(0, s2);
};

const swap = (idx1, idx2, str) => {
  const arr = str.split("");
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  return arr.join("");
};


