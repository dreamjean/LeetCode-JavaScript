/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    const map = new Map();
    
    return words.reduce((acc, word) => acc += (word.length <= s.length && isSubsequence(s, word, map)) ? 1 : 0, 0);
};

const isSubsequence = (str, word, map) => {
    if (map.has(word)) return map.get(word);
    
    let index = -1;
    for (let ch of word) {
        index = str.indexOf(ch, index + 1);
        if (index === -1) {
            map.set(word, false);
            return false;
        }
    }
    
    map.set(word, true);
    
    return true;
}