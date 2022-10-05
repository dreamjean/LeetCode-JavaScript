class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) return -1;
  
  let curr = this.head;
  while (index--) curr = curr.next;
  
  return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  return this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  return this.addAtIndex(this.size, val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) return;
  
  let curr = this.head;
  let node = new ListNode(val);
  if (index <= 0) {
    node.next = curr;
    this.head = node;
  } else {
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    
    node.next = curr.next;
    curr.next = node;
  }
  this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) return;
  
  let curr = this.head;
  if (!index) this.head = this.head.next;
  else {
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    
    curr.next = curr.next.next;
  }
  this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */