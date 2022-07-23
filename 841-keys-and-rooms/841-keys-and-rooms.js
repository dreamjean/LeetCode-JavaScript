/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n = rooms.length;
    const visited = new Array(n).fill(false);
    const queue = [rooms[0]];
    visited[0] = true;
    
    while (queue.length) {
        const curr = queue.shift();
        for (let nextIndex of curr) {
            if (visited[nextIndex]) continue;
            
            visited[nextIndex] = true;
            queue.push(rooms[nextIndex]);
        }
    }
    
    return visited.every(i => i);
};