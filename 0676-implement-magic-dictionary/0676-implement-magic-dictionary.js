
var MagicDictionary = function() {
  this.dictionary = new Set();
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  dictionary.forEach((word) => this.dictionary.add(word));
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  return [...this.dictionary].some((word) => {
    const n = word.length;
    let count = 0;
    if (n === searchWord.length) {
      for (let i = 0; i < n; i++) {
        if (word[i] !== searchWord[i]) count++;
      }
    }
    
    return count === 1;
  })
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */