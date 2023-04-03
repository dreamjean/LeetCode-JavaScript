/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let [left, right, count] = [0, people.length - 1, 0];
  
  while (left <= right) {
    if (people[left] + people[right] <= limit) left++;
    
    right--;
    count++;
  }
  
  return count;
};