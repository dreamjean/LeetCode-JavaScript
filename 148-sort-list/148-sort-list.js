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
var sortList = function (head) {
  const ans = [];
  let node = head;

  while (node) {
    ans.push(node.val);
    node = node.next;
  }

  node = head;
  ans
    .sort((a, b) => a - b)
    .forEach((num) => {
      node.val = num;
      node = node.next;
    });

  return head;
};
