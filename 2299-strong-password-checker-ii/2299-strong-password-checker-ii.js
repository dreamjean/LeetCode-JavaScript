/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    let [lower, upper, digit, special] = new Array(4).fill(false);
    
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i - 1]) return false;
        
        const curr = password[i];
        if (curr >= 'a' && curr <= 'z') lower = true;
        if (curr >= 'A' && curr <= 'Z') upper = true;
        if (curr >= '0' && curr <= '9') digit = true;
        if ('!@#$%^&*()-+'.includes(curr)) special = true;
    }
    
    return password.length >= 8 && lower && upper && digit && special;
};