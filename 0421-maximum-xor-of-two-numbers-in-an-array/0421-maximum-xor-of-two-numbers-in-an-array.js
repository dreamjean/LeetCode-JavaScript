/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let [max, mask] = [0, 0];
  
  for (let i = 31; i >= 0; i--) {
    mask = mask | (1 << i);
    const set = new Set();
    nums.forEach((num) => set.add(num & mask));
    
    let temp = max | (1 << i);
    for (let prefix of set) {
      if (set.has(temp ^ prefix)) {
        max = temp;
        break;
      }
    }
  }
  
  return max;
};
