/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return edit(s) === edit(t);
};

const edit = str => {
    let [res, backspace] = ['', 0];
    
    for (let i = str.length - 1; i >= 0; i--) {
        const ch = str[i];
        if (ch === '#') backspace++;
        else if (backspace > 0) backspace--;
        else res = ch + res;
    }
    
    return res;
}