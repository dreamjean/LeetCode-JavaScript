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
  if (!head.next) return true;
  
  const middle = slice(head);
  const second = reverse(middle);
  
  return isSameList(head, second);  
};

const slice = (node) => {
  let [prev, slow, fast] = [null, node, node];
  
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  
  prev.next = null;
  
  return slow;
}

const reverse = (node) => {
  let prev = null;
  
  while (node) [node.next, prev, node] = [prev, node, node.next];
  
  return prev;
}

const isSameList = (a, b) => {
  while (a && b) {
    if (a.val !== b.val) return false;
    
    a = a.next
    b = b.next
  }
  
  return true;
}