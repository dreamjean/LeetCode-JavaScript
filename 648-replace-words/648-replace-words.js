/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length);
    
    return sentence
        .split(' ')
        .map(word => {
            for (let w of dictionary)
                if (word.startsWith(w)) word = w
            
            return word
        })
        .join(' ');
};