/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let [min, max] = [1, Math.max(...piles)];
    
    while (min < max) {
        const mid = (min + max) >>> 1;
        if (timeLessThenH(h, mid, piles)) max = mid;
        else min = mid + 1;
    }
    
    return min;
};

const timeLessThenH = (h, speed, arr) => arr.reduce((time, num) => time += Math.ceil(num / speed), 0) <= h;