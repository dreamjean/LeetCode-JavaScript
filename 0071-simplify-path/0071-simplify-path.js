/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  return '/' + path.split('/').reduce((acc, curr) => {
    if (!curr || curr === '.') return acc;
    
    curr === '..' ? acc.pop() : acc.push(curr);
    
    return acc;
  }, []).join('/');
};