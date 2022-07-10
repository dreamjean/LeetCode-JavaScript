/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return edit(s) === edit(t)
};

const edit = str => {
    let [res, backpace] = ['', 0]
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '#') backpace++;
        else if (backpace) backpace--;
        else res = str[i] + res;
    }
    
    return res;
}