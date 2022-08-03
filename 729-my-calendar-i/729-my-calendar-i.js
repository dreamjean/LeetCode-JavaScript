var MyCalendar = function () {
  this.books = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.books.length)
    for (let [a, b] of this.books)
      if (Math.max(a, start) < Math.min(b, end)) return false;

  this.books.push([start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
