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
  let [x, num] = [0, 0];
    
  for (let ch of arr) {
      if (ch === "x") x++;
      else if (ch === "-x") x--;
      else if (ch.includes("x")) x += +ch.slice(0, -1);
      else num += +ch;
    }
  
  return [x, num];
};
