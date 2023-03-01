/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
  this.map = new Map();
  
  for (let weight = 0; weight < words.length; weight++) {
    const word = words[weight];
    const n = word.length;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        const key = word.slice(0, i) + '{' + word.slice(n - j);
        this.map.set(key, weight);
      }
    }
  }
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
  const key = pref + '{' + suff;
  return this.map.has(key) ? this.map.get(key) : -1;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */