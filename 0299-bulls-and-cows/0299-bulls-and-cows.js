/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const count = new Array(10).fill(0);
  let [a, b] = [0, 0];
  
  for (let i = 0; i < secret.length; i++) {
    const [s, g] = [secret[i], guess[i]];
    if (s !== g) {
      if (count[g]++ < 0) b++;
      if (count[s]-- > 0) b++;
    }
    
    else a++;
  }
  
  return `${a}A${b}B`;
};