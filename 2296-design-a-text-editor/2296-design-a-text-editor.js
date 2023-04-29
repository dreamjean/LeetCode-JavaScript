
var TextEditor = function() {
  this.left = [];
  this.right = [];
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
  for (let ch of text) this.left.push(ch);
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
  let cnt = 0;
  while (this.left.length && cnt < k) {
    this.left.pop();
    cnt++;
  }
  
  return cnt;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
  while (this.left.length && k--) 
    this.right.push(this.left.pop());
  
  return this.left.slice(Math.max(this.left.length - 10, 0)).join('');
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
  while (this.right.length && k--) 
    this.left.push(this.right.pop());
  
  return this.left.slice(Math.max(this.left.length - 10, 0)).join('');
};

/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */