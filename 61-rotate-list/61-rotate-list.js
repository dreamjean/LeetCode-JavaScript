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
var rotateRight = function (head, k) {
  if (!k || !head || !head.next) return head;

  let [first, second, n] = [head, head, 1];

  while (second.next) {
    n++;
    second = second.next;
  }

  for (let i = 1; i < n - (k % n); i++) first = first.next;

  second.next = head;
  head = first.next;
  first.next = null;

  return head;
};
