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
var removeZeroSumSublists = function (head) {
  const dummy = new ListNode(0, head);
  const preSum = new Map();
  let [curr, sum] = [dummy, 0];

  while (curr) {
    sum += curr.val;
    preSum.set(sum, curr);
    curr = curr.next;
  }

  [curr, sum] = [dummy, 0];

  while (curr) {
    sum += curr.val;
    curr.next = preSum.get(sum).next;
    curr = curr.next;
  }

  return dummy.next;
};
