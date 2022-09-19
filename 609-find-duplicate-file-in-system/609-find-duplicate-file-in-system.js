/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  paths = paths.map((x) => x.split(/\s+/));
  const map = new Map();

  for (let [root, ...rest] of paths) {
    for (let file of rest) {
      const [name] = file.match(/^.*\.txt/);
      const val = file.replace(name, "");

      if (map.has(val)) map.get(val).push(root + "/" + name);
      else map.set(val, [root + "/" + name]);
    }
  }
  return [...map.values()].filter((x) => x.length > 1);
};
