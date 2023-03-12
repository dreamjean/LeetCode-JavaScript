/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) return null;
  
  let node = head;
  
  while (node) {
    if (node.child) {
      let curr = node.child;
      
      while (curr.next) curr = curr.next;
      
      if (node.next) {
        curr.next = node.next;
        node.next.prev = curr;
      }
      
      node.next = node.child;
      node.next.prev = node;
      node.child = null;
    }
    
    node = node.next;
  }
  
  return head;
};