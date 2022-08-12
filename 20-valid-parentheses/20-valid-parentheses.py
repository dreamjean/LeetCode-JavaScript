class Solution:
    def isValid(self, s: str) -> bool:
        pairsMap = {'(': ')', '[': ']', '{': '}'}
        stack = []
        for p in s:
            if p in pairsMap:
                stack.append(pairsMap[p])
            elif len(stack) == 0 or p != stack.pop():
                return False
        return not len(stack)
      
