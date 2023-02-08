/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  folder.sort((a, b) => a.length - b.length);
  const set = new Set();
  
  for (let f of folder) {
    if (!isSubFolder(f, set)) set.add(f);
  }
  
  return [...set];
};
  
const isSubFolder = (sub, set) => {
  for (let i = 2; i < sub.length; i++) 
    if (sub[i] === '/' && set.has(sub.slice(0, i))) return true;
  
  return false;
}