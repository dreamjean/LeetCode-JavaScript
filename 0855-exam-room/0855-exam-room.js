/**
 * @param {number} n
 */
var ExamRoom = function(n) {
  this.list = [];
  this.n = n;
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
  const list = this.list;
  if (!list.length) {
    list.push(0);
    return 0;
  }
  
  let distance = Math.max(list[0], this.n - 1 - list.at(-1));
  
  for (let i = 0; i < list.length - 1; i++) 
    distance = Math.max(distance, Math.floor((list[i + 1] - list[i]) / 2));
  
  if (list[0] === distance) {
    list.unshift(0);
    return 0;
  }
  
  for (let i = 0; i < list.length - 1; i++) {
    if (distance === Math.floor((list[i + 1] - list[i]) / 2)) {
      const num = Math.floor((list[i + 1] + list[i]) / 2);
      this.list.splice(i + 1, 0, num);
      return num;
    }
  }
  
  list.push(this.n - 1);
  return this.n - 1;
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
  for (let i = 0; i < this.list.length; i++) {
    if (this.list[i] === p) {
      this.list.splice(i, 1);
      break;
    }
  }
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */