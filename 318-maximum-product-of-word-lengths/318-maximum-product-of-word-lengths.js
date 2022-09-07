/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const n = words.length;
  const codes = [];
  let res = 0;
  
  for (let i = 0; i < n; i++) {
    const word = words[i];
    let code = 0;
    for (let i = 0; i < word.length; i++) {
      const x = word.charCodeAt(i) - 'a'.charCodeAt();
      code |= (1 << x);
    }
    
    codes.push(code);
  }
  console.log(codes)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (!(codes[i] & codes[j]))
        res = Math.max(res, words[i].length * words[j].length);
    }
  }
  
  return res;
};