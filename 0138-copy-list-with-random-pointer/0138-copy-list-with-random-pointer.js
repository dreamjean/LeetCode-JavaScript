/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const map = new Map();
  
  const copy = (node) => {
    if (!node) return null;
    if (map.has(node)) return map.get(node);
    
    const n = new ListNode(node.val);
    map.set(node, n);
    n.next = copy(node.next);
    n.random = copy(node.random);
    
    return n;
  }
  
  return copy(head);
};