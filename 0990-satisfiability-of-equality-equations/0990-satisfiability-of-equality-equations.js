/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  const parents = new Array(26).fill(0).map((_, i) => i);
  const a = "a".charCodeAt();

  const find = (x) => {
    if (x !== parents[x]) parents[x] = find(parents[x]);

    return parents[x];
  };

  equations.forEach((e) => {
    if (e[1] === "=")
      parents[find(e.charCodeAt(0) - a)] = find(e.charCodeAt(3) - a);
  });

  return !equations.some(
    (e) =>
      e[1] === "!" && find(e.charCodeAt(0) - a) === find(e.charCodeAt(3) - a)
  );
};
