/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
  const subArr = [];
  const ans = [];
  
  obstacles.forEach((num) => {
    if (!subArr.length || subArr.at(-1) <= num) {
      subArr.push(num);
      ans.push(subArr.length);
    }
    else {
      let idx = search(subArr, num);
      subArr[idx] = num;
      ans.push(idx + 1);
    }
  })
  
  return ans;
};

const search = (nums, target) => {
  let [low, high] = [0, nums.length];
  
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (nums[mid] > target) high = mid;
    else low = mid + 1;
  }
  
  return low;
}