class Solution:
    def findLexSmallestString(self, s: str, a: int, b: int) -> str:
        def addA(s, a):
            new_s = ''
            for i,c in enumerate(s):
                if i & 1:
                    new_s += str((int(c) + a) % 10)
                else:
                    new_s += c
            return new_s
        
        
        def rotate(s, b):
            return s[-b:] + s[:-b]
        
        
        dq, seen, smallest = deque([s]), set(), s
        while dq:
            curr = dq.popleft()
            if curr < smallest:
                smallest = curr
            if curr not in seen:
                seen.add(curr)
                dq.append(addA(curr, a))
                dq.append(rotate(curr, b))
        return smallest