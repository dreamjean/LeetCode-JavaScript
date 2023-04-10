class Solution:
    def isValid(self, s: str) -> bool:
        pairs = {'(': ')', '[': ']', '{': '}'}
        stack = []
        for p in s:
            if p in pairs:
                stack.append(pairs[p])
            elif not stack or stack.pop() != p:
                return False
        return not stack