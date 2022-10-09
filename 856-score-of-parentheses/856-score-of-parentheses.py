class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        qwr, ans = 0, 0
        for i in range(1, len(s)):
            if s[i] == '(':
                qwr += 1
            elif s[i - 1] == '(':
                ans += 1 << qwr
                qwr -= 1
            else:
                qwr -= 1
        return ans