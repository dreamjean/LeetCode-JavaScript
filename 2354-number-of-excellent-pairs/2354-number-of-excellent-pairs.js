/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function(nums, k) {
    const set = new Set(nums);
    const cnt = new Array(30).fill(0);
    let ans = 0;
    
    for (let num of set) {
        const count = bitCount(num);
        ++cnt[count]
    }
    
    for (let i = 1; i < 30 ; i++) 
        for (let j = 1; j < 30; j++) 
            if (i + j >= k) ans += cnt[i] * cnt[j];
    
    return ans;
};

function bitCount(num) {
    let cnt = 0
    while (num) {
        if (num & 1 === 1) cnt++
        num >>= 1
    }
    return cnt
}