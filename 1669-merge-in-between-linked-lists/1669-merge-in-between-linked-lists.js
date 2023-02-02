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
  let [first, second] = [dummy, dummy];
  
  for (let i = 0; i <= b - a; i++) second = second.next;
  
  for (let i = 0; i < a; i++) {
    first = first.next;
    second = second.next;
  }
  
  first.next = list2;
  while (first.next) first = first.next;
  
  first.next = second.next;
  second.next = null;
  
  return dummy.next;
};