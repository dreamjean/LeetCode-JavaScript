/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
  const arr = palindrome.split('');
  const n = arr.length;
  
  for (let i = 0; i < ~~(n / 2); i++) {
    if (arr[i] !== 'a') {
      arr[i] = 'a';
      return arr.join('');
    }
  }
  
  arr[n - 1] = 'b';
  
  return n === 1 ? '' : arr.join('');
};