/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const uf = new Array(26).fill(0);
  const a = "a".charCodeAt();

  const find = (x) => {
    if (x !== uf[x]) uf[x] = find(uf[x]);

    return uf[x];
  };
  
  for (let i = 0; i < 26; i++) uf[i] = i;

  for (let e of equations) {
    if (e[1] === "=") uf[find(e.charCodeAt(0) - a)] = find(e.charCodeAt(3) - a);
  }

  for (let e of equations) {
    if (e[1] === "!" && find(e.charCodeAt(0) - a) === find(e.charCodeAt(3) - a))
      return false;
  }

  return true;
};
