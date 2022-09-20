/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const map = {};

  for (let path of paths) {
    path = path.split(" ");
    for (let i = 1; i < path.length; i++) {
      const [name, content] = path[i].replace(")", "").split("(");
      const val = `${path[0]}/${name}`;
      map[content] ? map[content].push(val) : map[content] = [val];
    }
  }

  return Object.values(map).filter((path) => path.length > 1);
};
