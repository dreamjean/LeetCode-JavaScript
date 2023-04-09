# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        stack, ans = [], []
        while head:
            while stack and stack[-1][0] < head.val:
                ans[stack.pop()[1]] = head.val
            stack.append([head.val, len(ans)])
            ans.append(0)
            head = head.next
        return ans