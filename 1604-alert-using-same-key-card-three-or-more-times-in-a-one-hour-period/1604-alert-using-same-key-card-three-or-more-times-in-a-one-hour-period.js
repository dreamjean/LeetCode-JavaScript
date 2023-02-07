/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
  const n = keyName.length;
  const map = {};
  const ans = [];
  
  for (let i = 0; i < n; i++) {
    const name = keyName[i];
    const [h, m] = keyTime[i].split(':');
    const minutes = +h * 60 + +m;
    map[name] ? map[name].push(minutes) : map[name] = [minutes];
  }
  
  for (let [name, times] of Object.entries(map)) 
    if (getAlert(times)) ans.push(name);
  
  return ans.sort((a, b) => a.localeCompare(b));
};

const getAlert = (times) => times.sort((a, b) => a - b).some((time, i) => time - times[i - 2] <= 60);
  