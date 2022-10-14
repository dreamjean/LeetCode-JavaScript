class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        seen = set(target)
        stack = []
        for i in range(1, n + 1):
            stack.append('Push')
            if not i in seen:
                stack.append('Pop')
            if i == target[-1]:
                break
        return stack