/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  const n = chars.length;
  let [start, i] = [0, 0];
  
  while (i < n) {
    const char = chars[i];
    let count = 0;
    while (i < n && chars[i] === char) {
      i++;
      count++;
    }
    
    chars[start++] = char;
    if (count > 1) 
      for (let ch of `${count}`) chars[start++] = ch;
  }
  
  return start;
};

