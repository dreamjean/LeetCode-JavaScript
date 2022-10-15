/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const dummy = new ListNode();
  const pq = new MinPriorityQueue();
  let curr = null;
  
  lists.forEach((list) => {
    curr = list;
    while (curr) {
      pq.enqueue(curr.val);
      curr = curr.next;
    }
  })
  
  curr = dummy;
  
  while (!pq.isEmpty()) {
    const val = pq.dequeue().element;
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  
  return dummy.next;
};