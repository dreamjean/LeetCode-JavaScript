/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  const reg = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+]).{8,100})/
  if (!reg.exec(password)) return false;
  
  for (let i = 1; i < password.length; i++) 
    if (password[i] === password[i - 1]) return false;
  
  return true;
};