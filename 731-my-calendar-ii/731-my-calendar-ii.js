
var MyCalendarTwo = function() {
    this.one = [];
    this.two = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for (const [left, right] of this.two)
        if (start < right && end > left) return false;
    
    for (const [left, right] of this.one) 
        if (start < right && end > left) this.two.push([Math.max(start, left), Math.min(end, right)]);
    
    this.one.push([start, end]);
    
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */