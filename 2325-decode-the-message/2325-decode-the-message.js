/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  key = key.replaceAll(' ', '')
  const map = {};
  let [curr, ans] = [97, ''];
  
  for (let ch of key) 
    if (!map[ch]) map[ch] = String.fromCharCode(curr++);
  
  for (let ch of message) 
    ans += map[ch] ?? ch;  
    
  return ans;
};