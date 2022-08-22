/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
  const [S, T] = [stamp.split(''), target.split('')];
  const ans = [];
  let cnt = 0;
  
  while (cnt < T.length) {
    const i = getReplaceIdx(S, T);
    if (i < 0) return [];
    
    ans.push(i);
    cnt += replace(i, i + S.length, T);
  }
  
  ans.reverse();
  
  return ans;
};

const getReplaceIdx = (S, T) => {
  const [sLen, tLen] = [S.length, T.length];
  for (let i = 0; i <= tLen - sLen; i++) {
    let match = 0;
    for (let j = 0; j < sLen; j++) {
      const ch = T[i + j];
      if (ch === '?') continue;
      if (ch !== S[j]) {
        match = -1;
        break;
      }
      match = 1;
    }
    
    if (match > 0) return i;
  }
  
  return -1;
}

const replace = (begin, end, T) => {
  let count = 0;
  for (let i = begin; i < end; i++) {
    if (T[i] !== '?') {
      T[i] = '?';
      count++;
    }
  }
  
  return count;
}