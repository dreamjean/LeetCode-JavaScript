var MyCalendarThree = function () {
  this.timeline = {};
};

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  const tml = this.timeline;
  let k = 0;

  start in tml ? tml[start]++ : (tml[start] = 1);
  end in tml ? tml[end]-- : (tml[end] = -1);

  return Object.values(tml).reduce(
    (acc, curr) => (acc = Math.max(acc, (k += curr))),
    0
  );
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
