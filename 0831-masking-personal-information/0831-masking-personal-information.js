/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
  const country = ['', '+*-', '+**-', '+***-'];
  const at = s.indexOf('@');
  
  if (at > 0) {
    s = s.toLowerCase();
    return s[0] + '*****' + s.substring(at - 1);
  }
  
  s = s.replace(/[^0-9]/g, '');
  
  return country[s.length - 10] + '***-***-' + s.slice(-4);
};