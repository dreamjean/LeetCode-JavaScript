/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let [l, r, cntT, cntF, max] = new Array(5).fill(0);
  
  while (r < answerKey.length) {
    if (answerKey[r] === 'T') cntT++;
    if (answerKey[r] === 'F') cntF++;
    while (cntT > k && cntF > k) {
      if (answerKey[l] === 'T') cntT--;
      if (answerKey[l] === 'F') cntF--;
      l++;
    }
    
    max = Math.max(max, r - l + 1);
    r++;
  }
  
  return max;
};