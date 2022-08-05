/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const n = rooms.length;
  const set = new Set([0]);
  const queue = [0];

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      for (let next of rooms[curr]) {
        if (set.has(next)) continue;

        set.add(next);
        queue.push(next);
      }
    }
  }

  return set.size === n;
};
