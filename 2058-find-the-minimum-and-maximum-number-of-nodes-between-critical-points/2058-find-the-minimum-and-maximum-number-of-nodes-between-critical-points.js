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
var nodesBetweenCriticalPoints = function (head) {
  const indexs = [];
  let [curr, i, min] = [head, 0, Infinity];

  while (curr) {
    i++;

    if (curr.next && curr.next.next) {
      const [a, b, c] = [curr.val, curr.next.val, curr.next.next.val];
      if ((b > a && b > c) || (b < a && b < c)) indexs.push(i);
    }

    curr = curr.next;
  }

  const n = indexs.length;
  if (n < 2) return [-1, -1];
  if (n === 2) {
    const num = indexs[1] - indexs[0];
    return [num, num];
  }

  for (let i = 1; i < indexs.length; i++) {
    min = Math.min(min, indexs[i] - indexs[i - 1]);
  }

  return [min, indexs[n - 1] - indexs[0]];
};
