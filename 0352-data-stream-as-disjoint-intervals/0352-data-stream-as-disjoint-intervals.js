
var SummaryRanges = function() {
    this.num = []
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    if (this.num.includes(val)) return 
    this.num.push(val)
    this.num.sort((a, b) => a - b)
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    const area = []
    const n = this.num.length
    if (!n) return area

    for (let i = 0; i < n; i++) {
        const curr = this.num[i]
        if (!area.length) area.push([curr, curr])

        else {
            const lastArea = area[area.length - 1]
            if (lastArea[1] + 1 === curr)
                lastArea[1]++
            
            else area.push([curr, curr])
        }
    }

    return area
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */