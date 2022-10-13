/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);
  
  let [first, second, fast] = [null, head, head];
  while (fast && fast.next) {
    first = second;
    second = second.next;
    fast = fast.next.next;
  }
  
  first.next = null;
  const node = new TreeNode(second.val);
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(second.next);
  
  return node;
};