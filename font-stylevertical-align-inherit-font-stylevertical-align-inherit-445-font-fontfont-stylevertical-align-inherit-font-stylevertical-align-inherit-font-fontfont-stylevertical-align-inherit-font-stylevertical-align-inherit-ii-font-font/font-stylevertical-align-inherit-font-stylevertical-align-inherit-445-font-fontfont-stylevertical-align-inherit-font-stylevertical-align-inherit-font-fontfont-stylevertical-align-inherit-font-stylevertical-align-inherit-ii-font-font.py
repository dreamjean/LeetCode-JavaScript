/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const num = BigInt(changeToString(l1)) + BigInt(changeToString(l2));
  const dummy = new ListNode();
  let curr = dummy;
  
  for (let c of num.toString()) {
    curr.next = new ListNode(+c);
    curr = curr.next;
  }
  
  return dummy.next;
};

const changeToString = (p) => {
  let str = '';
  
  while (p) {
    str += p.val;
    p = p.next;
  }
  
  return str;
}