/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    const [min, max] = [Math.min(start, destination), Math.max(start, destination)];
    let [res1, res2] = [0, 0];
    
    distance.forEach((num, i) => i >= min && i < max ? res1 += num : res2 += num);
    
    return Math.min(res1, res2);
};