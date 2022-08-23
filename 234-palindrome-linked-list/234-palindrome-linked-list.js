/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let [slow, fast, reverse] = [head, head, null];
  
  while (fast && fast.next) {
    fast = fast.next.next;
    [slow.next, reverse, slow] = [reverse, slow, slow.next];
  }
  
  if (fast) slow = slow.next;
  
  while (slow && reverse) {
    if (slow.val !== reverse.val) return false;
    
    slow = slow.next;
    reverse = reverse.next;
  }
  
  return !reverse;
};