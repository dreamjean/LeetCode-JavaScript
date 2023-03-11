/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next || !k) return head;
  
  let [p1, p2, len] = [head, head, 1];
  
  while (p2.next) {
    p2 = p2.next;
    len++;
  }
  
  for (let i = 1; i < len - k % len; i++)
    p1 = p1.next;
  
  p2.next = head;
  head = p1.next;
  p1.next = null;
  
  return head;
};