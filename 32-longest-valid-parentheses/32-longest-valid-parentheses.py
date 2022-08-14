class Solution:
    def longestValidParentheses(self, s: str) -> int:
        stack = [-1]
        res = 0
        for i, val in enumerate(s):
            if val == '(': 
                stack.append(i)
            else:
                stack.pop()
                if stack:
                    res = max(res, i-stack[-1])
                else:
                    stack.append(i)
        return res
        