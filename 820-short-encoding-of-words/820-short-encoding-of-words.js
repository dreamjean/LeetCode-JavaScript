/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const good = new Set(words);
    
    words.forEach(word => {
        for (let i = 1; i < word.length; i++) 
            good.delete(word.slice(i))
    })
    

    return Array
        .from(good)
        .reduce((ans, word) => ans += (word.length + 1), 0);
};