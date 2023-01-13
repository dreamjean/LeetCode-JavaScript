/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
  if (jug1Capacity + jug2Capacity < targetCapacity) return false;
  
  if (
    jug1Capacity === targetCapacity ||
    jug2Capacity === targetCapacity || 
    jug1Capacity + jug2Capacity === targetCapacity
  )
    return true;
  
  return targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0;
};

const gcd = (a, b) => (!b ? a : gcd(b, a % b));