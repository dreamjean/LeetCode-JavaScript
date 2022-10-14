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
var nextLargerNodes = function (head) {
  const stack = [];
  const ans = [];

  while (head) {
    ans.push(head.val);
    head = head.next;
  }

  for (let i = ans.length - 1; i >= 0; i--) {
    const num = ans[i];
    while (stack.length && stack.at(-1) <= num) stack.pop();

    ans[i] = !stack.length ? 0 : stack.at(-1);
    stack.push(num);
  }

  return ans;
};
