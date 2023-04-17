/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
  this.arr = arr;
  this.map = {};
  
  arr.forEach((num, i) => this.map[num] ? this.map[num].push(i) : this.map[num] = [i]);
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
  for (let i = 0; i < 20; i++) {
    const randomPos = left + Math.floor(Math.random() * (right - left + 1));
    const num = this.arr[randomPos];
    const start = searchStart(this.map[num], left);
    const end = searchEnd(this.map[num], right);
    
    if (end - start >= threshold) return num;
  }
  
  return -1;
};

const searchStart = (arr, target) => {
  let [low, high] = [0, arr.length];
  
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (arr[mid] >= target) high = mid;
    else low = mid + 1;
  }
  
  return low;
}

const searchEnd = (arr, target) => {
  let [low, high] = [0, arr.length];
  
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (arr[mid] > target) high = mid;
    else low = mid + 1;
  }
  
  return low;
}

/** 
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */