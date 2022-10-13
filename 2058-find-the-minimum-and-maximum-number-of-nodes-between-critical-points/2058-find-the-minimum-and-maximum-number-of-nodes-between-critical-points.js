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
var nodesBetweenCriticalPoints = function(head) {
  const indexs = [];
  let [curr, i] = [head, 1];
  let [min, max] = [Infinity, 0];
  
  while (curr) {
    i++;
    
    if (curr.next && curr.next.next) {
      const [p1, p2, p3] = [curr.val, curr.next.val, curr.next.next.val];
      if ((p1 < p2 && p2 > p3) || (p1 > p2 && p2 < p3)) indexs.push(i);
    }
    
    curr = curr.next;
  }
  
  const n = indexs.length;
  if (n < 2) return [-1, -1];  
  if (n === 2) return [indexs[1] - indexs[0], indexs[1] - indexs[0]];
  
  for (let i = 1; i < n; i++) {
    min = Math.min(min, indexs[i] - indexs[i - 1]);
    if (i === n - 1) max = indexs[i] - indexs[0];
  }
  
  return [min, max];
};