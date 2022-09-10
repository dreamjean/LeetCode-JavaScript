/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
  properties.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  let [maxDef, weak] = [0, 0];
  
  for (let i = properties.length - 1; i >= 0; --i) {
    const defense = properties[i][1];
    maxDef = Math.max(maxDef, defense);
    if (defense < maxDef) ++weak;
  }
  
  return weak;
};