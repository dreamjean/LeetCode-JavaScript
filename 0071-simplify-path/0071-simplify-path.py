class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []
        for ch in path.split('/'):
            if not ch or ch == '.':
                continue
            if ch != '..':
                stack.append(ch)
            elif stack:
                stack.pop()
        return '/' + '/'.join(stack)