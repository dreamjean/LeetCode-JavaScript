/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const cnts = new Array(n).fill(0);
  let max = 0;

  const search = (i = 0, count = 0) => {
    if (i === requests.length) {
      if (count > max && !cnts.some((x) => x)) max = count;

      return;
    }

    const [a, b] = requests[i];
    --cnts[a];
    ++cnts[b];
    search(i + 1, count + 1);

    ++cnts[a];
    --cnts[b];
    search(i + 1, count);
  };

  search();

  return max;
};
