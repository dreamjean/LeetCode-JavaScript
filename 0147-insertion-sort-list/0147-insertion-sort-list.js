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
var insertionSortList = function (head) {
  const dummy = new ListNode();
  let [prev, curr, next] = [dummy, head, null];

  while (curr) {
    next = curr.next;
    while (prev.next?.val < curr.val) prev = prev.next;

    curr.next = prev.next;
    prev.next = curr;
    prev = dummy;
    curr = next;
  }

  return dummy.next;
};
