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
var partition = function (head, x) {
  const dummy1 = new ListNode();
  const dummy2 = new ListNode();
  let [front, back, curr] = [dummy1, dummy2, head];

  while (curr) {
    if (curr.val < x) {
      front.next = curr;
      front = curr;
    } else {
      back.next = curr;
      back = curr;
    }

    curr = curr.next;
  }

  front.next = dummy2.next;
  back.next = null;

  return dummy1.next;
};
