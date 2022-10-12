/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
  const set = new Set(nums);
  let count = 0;
  
  while (head) {
    if (set.has(head.val) && !set.has(head.next?.val)) count++;
    
    head = head.next;
  }
    
  return count;
};