/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const arr = [];
  const dummy = new ListNode();
  let curr = dummy;

  lists.forEach((list) => {
    let node = list;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
  });

  arr
    .sort((a, b) => a - b)
    .forEach((num) => {
      curr.next = new ListNode(num);
      curr = curr.next;
    });

  return dummy.next;
};
