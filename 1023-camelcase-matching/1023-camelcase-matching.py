class Solution:
    def camelMatch(self, queries: List[str], pattern: str) -> List[bool]:
        def check(s, pattern):
            j, n = 0, len(pattern)
            for ch in s:
                if j < n and ch == pattern[j]:
                    j += 1
                elif ch == ch.lower():
                    continue
                else:
                    return False
            return j == n
          
        
        return [check(q, pattern) for q in queries]