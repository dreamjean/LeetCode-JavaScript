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
var reverseKGroup = function (head, k) {
  let [curr, count] = [head, 0];

  while (curr && count < k) {
    curr = curr.next;
    count++;
  }

  if (count === k) {
    curr = reverseKGroup(curr, k);

    while (count--) [head.next, curr, head] = [curr, head, head.next];

    head = curr;
  }

  return head;
};
