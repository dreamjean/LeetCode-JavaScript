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
  let [first, second] = [dummy1, dummy2];
  
  while (head) {
    if (head.val < x) {
      first.next = head;
      first = head;
    } else {
      second.next = head;
      second = head;
    }
    
    head = head.next;
  }
  
  first.next = dummy2.next;
  second.next = null;
  
  return dummy1.next;
};