/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummy = new ListNode(-1, head);
  let prev = dummy;
  
  for (let i = 0; i < left - 1; i++) prev = prev.next;
  
  let second = prev.next;
  for (let i = left; i < right; i++) {
    const next = second.next;
    second.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  
  return dummy.next;
};