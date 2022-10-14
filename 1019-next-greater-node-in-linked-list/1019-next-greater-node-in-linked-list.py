# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        ans, stack, i = [], [], 0
        while head:
            while stack and stack[-1][0] < head.val:
                ans[stack[-1][1]] = head.val
                stack.pop()
            stack.append((head.val, i))
            ans.append(0)
            i += 1
            head = head.next
            
        return ans