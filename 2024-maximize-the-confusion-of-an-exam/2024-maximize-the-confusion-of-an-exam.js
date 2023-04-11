/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let [l, r, ans, cntF, cntT] = [0, 0, 0, 0, 0];
  
  while (r < answerKey.length) {
    answerKey[r] === 'T' ? cntT++ : cntF++;
    while (cntF > k && cntT > k) 
      answerKey[l++] === 'T' ? cntT-- : cntF--;
    
    ans = Math.max(ans, r - l + 1);
    r++;
  }
  
  return ans;
};
  
