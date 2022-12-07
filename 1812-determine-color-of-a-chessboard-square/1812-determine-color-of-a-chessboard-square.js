/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  const char = coordinates.charCodeAt(0) - 'a'.charCodeAt();
  const num = +coordinates[1];
  
  return (isEven(char) && isEven(num)) || (isOdd(char) && isOdd(num));
};

const isEven = (x) => !(x & 1);
const isOdd = (x) => x & 1;