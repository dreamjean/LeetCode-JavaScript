/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const map = {};

  return groupSizes.reduce((acc, curr, i) => {
    map[curr] ? map[curr].push(i) : (map[curr] = [i]);

    if (map[curr].length === curr) {
      acc.push(map[curr]);
      delete map[curr];
    }

    return acc;
  }, []);
};
