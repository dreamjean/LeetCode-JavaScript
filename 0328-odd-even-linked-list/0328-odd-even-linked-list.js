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
var oddEvenList = function(head) {
  if (!head) return head;
  
  let [odd, even] = [head, head.next];
  
  while (odd.next && odd.next.next) {
    let tmp = odd.next;
    odd.next = tmp.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  
  odd.next = even;
  
  return head;
};