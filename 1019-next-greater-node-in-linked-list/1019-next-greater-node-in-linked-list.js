/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  const stack = [];
  const ans = [];
  
  while (head) {
    while (stack.length && stack.at(-1)[0] < head.val) {
      const index = stack.pop()[1];
      ans[index] = head.val;
    }
    
    stack.push([head.val, ans.length]);
    ans.push(0);
    head = head.next;
  }
  
  return ans;
};