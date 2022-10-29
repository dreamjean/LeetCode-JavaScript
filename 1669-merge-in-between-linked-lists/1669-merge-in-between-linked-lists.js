/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  const dummy = new ListNode(-1, list1);
  let [p1, p2] = [dummy, dummy];
  
  for (let i = 0; i <= b - a; i++) p2 = p2.next;
  
  for (let i = 0; i < a; i++) {
    p1 = p1.next;
    p2 = p2.next;
  }
  
  p1.next = list2;
  
  while (p1.next) p1 = p1.next;
  
  p1.next = p2.next;
  p2.next = null;
  
  return dummy.next;
};