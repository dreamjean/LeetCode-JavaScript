/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
  return check(a, b) || check(b, a);
};

const check = (strA, strB) => {
  let [i, j] = [0, strA.length - 1];
  
  while (i < j && strA[i] === strB[j]) {
    i++;
    j--;
  }
  
  return i >= j || isPalindrome(strA, i, j) || isPalindrome(strB, i, j);
}

const isPalindrome = (str, i, j) => {
  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }
  
  return i >= j;
}