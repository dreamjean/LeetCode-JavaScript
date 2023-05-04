/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kIncreasing = function(arr, k) {
  const n = arr.length;
  let save = 0;
  
  for (let i = 0; i < k; i++) {
    const subArr = [];
    
    for (let j = i; j < n; j += k) {
      let num = arr[j];
      if (!subArr.length && subArr.at(-1) <= num) subArr.push(num);
      else subArr[search(subArr, num)] = num;
    }
    
    save += subArr.length;
  }
  
  return n - save;
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