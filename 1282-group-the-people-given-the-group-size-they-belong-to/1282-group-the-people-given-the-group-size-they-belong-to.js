/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const map = {};

  groupSizes.forEach((num, i) =>
    map[num] ? map[num].push(i) : (map[num] = [i])
  );

  return Object.entries(map).reduce((acc, [num, cnt]) => {
    if (cnt.length > +num) {
      while (cnt.length > +num) acc.push(cnt.splice(0, +num));

      acc.push(cnt);
    } else acc.push(cnt);

    return acc;
  }, []);
};
