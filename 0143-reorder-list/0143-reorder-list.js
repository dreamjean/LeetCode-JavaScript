/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const middle = slice(head);
  const second = reverse(middle);
  
  merge(head, second);
};

const slice = (node) => {
  let [slow, fast] = [node, node];
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let next = slow.next;
  slow.next = null;
  
  return next;
}

const reverse = (node) => {
  let prev = null;
  
  while (node) [node.next, prev, node] = [prev, node, node.next];
  
  return prev;
}

const merge = (a, b) => {
  let [aNext, bNext] = [null, null];
  
  while (b) {
    aNext = a.next;
    bNext = b.next;
    
    a.next = b;
    b.next = aNext;
    
    a = aNext;
    b = bNext;
  }
}