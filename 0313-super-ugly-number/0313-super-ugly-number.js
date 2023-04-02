/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const k = primes.length;
  const indexs = new Array(k).fill(0);
  const nums = [1];
  
  while (nums.length < n) {
    const min = getMinNum(primes, nums, indexs);
    nums.push(min);
    
    for (let i = 0; i < k; i++) {
      if (primes[i] * nums[indexs[i]] === min) indexs[i]++;
    }
  }
  
  return nums[n - 1];
};

const getMinNum = (primes, nums, indexs) => 
  primes.reduce((acc, curr, i) => acc = Math.min(acc, curr * nums[indexs[i]]), Infinity);