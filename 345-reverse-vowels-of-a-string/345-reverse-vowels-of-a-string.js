/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const reg = /[aeiou]/i;
  const vowels = s.split('').filter(char => reg.test(char));
  
  return s.split(reg).reduce((res, curr) => res + curr + (vowels.pop() || ''), '');
};