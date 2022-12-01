/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const n = s.length / 2;
  
  return cntVowels(s.slice(0, n)) === cntVowels(s.slice(n));
};

const cntVowels = (str) => {
  const vowels = new Set('aeiouAEIOU');
  let ans = 0;
  
  for (let c of str) {
    ans += vowels.has(c);
  }
  
  return ans;
}