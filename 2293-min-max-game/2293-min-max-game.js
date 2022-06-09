/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
    
    const newNums = nums.reduce((arr, _, i) => {
        const isEven = i % 2 === 0;
        if (i < n / 2) {
            const [curr, next] = [nums[i * 2], nums[i * 2 + 1]]
            const num = isEven ? Math.min(curr, next) : Math.max(curr, next);
            arr[i] = num;
        }
        
        return arr;
    }, []);
    
    return minMaxGame(newNums);
};