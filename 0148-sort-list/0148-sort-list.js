/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) return head;
  
  let [prev, slow, fast] = [null, head, head];
  
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  
  if (prev) prev.next = null;
  
  const first = sortList(head);
  const second = sortList(slow);
  
  return merge(first, second);
};

const merge = (a, b) => {
  if (!a) return b;
  if (!b) return a;
  
  if (a.val < b.val) {
    a.next = merge(a.next, b);
    return a;
  }
  
  b.next = merge(a, b.next)
  return b;
}