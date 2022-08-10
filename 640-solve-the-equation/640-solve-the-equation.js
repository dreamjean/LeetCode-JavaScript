/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  const slice = equation.split("=");
  let [leftX, left] = evalSide(slice[0]);
  let [rightX, right] = evalSide(slice[1]);

  leftX -= rightX;
  left -= right;

  return leftX
    ? `x=${-left / leftX}`
    : left
    ? "No solution"
    : "Infinite solutions";
};

const evalSide = (str) => {
  const arr = str.replace(/\+/g, " ").replace(/-/g, " -").split(" ");

  return arr.reduce(
    (acc, curr) => {
      if (curr === "x") acc[0]++;
      else if (curr === "-x") acc[0]--;
      else if (curr.includes("x")) acc[0] += +curr.slice(0, -1);
      else acc[1] += +curr;

      return acc;
    },
    [0, 0]
  );
};
