/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const preSum = new Array(n + 1).fill(0);
    const stack = [];
    let [head, tail, ans] = [0, 0, n + 1];
    
    nums.forEach((num, i) => preSum[i + 1] = preSum[i] + num);
    
    preSum.forEach((num, i) => {
        const size = stack.length;
        while (head < size && num - preSum[stack[head]] >= k) 
            ans = Math.min(ans, i - stack[head++]);
        
        while (stack.length && num <= preSum[stack[tail - 1]]) {
            stack.pop();
            tail--;
        }
        
        stack.push(i);
        tail++;
    })
    
    return ans <= n ? ans : -1;
};