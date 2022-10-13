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
  let [curr, cnt] = [head, 0];
  
  while (curr) {
    cnt++;
    curr = curr.next;
  }
  
  const buildTree = (l, r) => {
    if (l > r) return null;
    
    const mid = (l + r) >> 1;
    const node = new TreeNode();
    
    node.left = buildTree(l, mid - 1);
    node.val = head.val;
    head = head.next;
    node.right = buildTree(mid + 1, r);
    
    return node;
  }
    
  return buildTree(1, cnt);
};