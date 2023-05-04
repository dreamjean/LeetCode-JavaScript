/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const n = senate.length;
  const queueR = [];
  const queueD = [];
  let i = n;
  
  for (let i = 0; i < n; i++) {
    senate[i] === 'R' ? queueR.push(i) : queueD.push(i);
  }
  
  while (queueR.length && queueD.length) {
    const posR = queueR.shift();
    const posD = queueD.shift();
    
    posR < posD ? queueR.push(i++) : queueD.push(i++);
  }
  
  return !queueR.length ? 'Dire' : 'Radiant';
};