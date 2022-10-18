/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const arr = [...`L${dominoes}R`];
  let [l, r] = [0, 1];

  while (r < arr.length) {
    while (arr[r] === ".") r++;
    if (arr[l] === arr[r]) {
      for (let i = l + 1; i < r; i++) arr[i] = arr[l];
    } else if (arr[l] > arr[r]) {
      for (let i = 0; i < (r - l) / 2; i++) {
        arr[l + i] = "R";
        arr[r - i] = "L";
      }
    }

    l = r++;
  }

  return arr.slice(1, -1).join("");
};
