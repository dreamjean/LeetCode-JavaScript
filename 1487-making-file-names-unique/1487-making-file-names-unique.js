/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
  const set = new Set();
  
  for (let name of names) {
    if (set.has(name)) {
      let count = 1;
      while (set.has(`${name}(${count})`)) count++;
      
      set.add(`${name}(${count})`);
    }
    
    set.add(name);
  }
  
  return [...set];
};