/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
  this.tokens = new Map();
  this.timeToLive = timeToLive;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  if (!this.tokens.has(tokenId)) this.tokens.set(tokenId, currentTime + this.timeToLive);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  if (!this.tokens.has(tokenId)) return;
  
  const { tokens, timeToLive } = this;
  if (tokens.get(tokenId) > currentTime) tokens.set(tokenId, currentTime + timeToLive);
  else tokens.delete(tokenId);
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  return [...this.tokens.values()].reduce((acc, curr) => acc + (curr > currentTime), 0);
};

/** 
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */