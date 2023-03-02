/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let [start, count] = [0, 1];
  
  for (let i = 1; i <= chars.length; i++) {
    const prev = chars[i - 1];
    const curr = chars[i];
    if (prev === curr) count++;
    else {
      if (count === 1) {
        start = i;
        continue;
      }
      
      chars.splice(start + 1, count - 1, ...`${count}`);
      i = start + `${count}`.length + 1;
      start = i;
      count = 1;
    }
  }
};