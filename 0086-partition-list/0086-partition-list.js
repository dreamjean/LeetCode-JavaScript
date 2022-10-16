/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const dummy1 = new ListNode(0);
  const dummy2 = new ListNode(0);
  let [p1, p2] = [dummy1, dummy2];
  
  while (head) {
    if (head.val < x) {
      p1.next = head;
      p1 = head;
    } else {
      p2.next = head;
      p2 = head;
    }
    
    head = head.next;
  }
  
  p1.next = dummy2.next;
  p2.next = null;
  
  return dummy1.next;
};