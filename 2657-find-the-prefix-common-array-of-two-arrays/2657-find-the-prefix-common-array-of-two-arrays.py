class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        ans = []
        p = q = 0
        for a, b in zip(A, B):
            p |= 1 << a
            q |= 1 << b
            ans.append((p & q).bit_count())
        return ans