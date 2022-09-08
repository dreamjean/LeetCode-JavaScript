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
  const deepCopy = (node, map = new Map()) => {
    if (!node) return null;
    if (map.has(node)) return map.get(node);
    
    const currNode = new Node(node.val);
    map.set(node, currNode);
    currNode.next = deepCopy(node.next, map);
    currNode.random = deepCopy(node.random, map);
    
    return currNode;
  }
  
  return deepCopy(head);
};