/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const numOfSum = new Array(82).fill(0);
  let res = -1;

  for (let num of nums) {
    const index = digitsSum(num);
    if (numOfSum[index]) res = Math.max(res, numOfSum[index] + num);

    numOfSum[index] = Math.max(numOfSum[index], num);
  }

  return res;
};

const digitsSum = num => [...`${num}`].reduce((acc, curr) => acc += +curr, 0);


