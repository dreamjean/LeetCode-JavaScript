class Solution:
    def preimageSizeFZF(self, k: int) -> int:
        def trailingZeros(n):
            res = n
            while n:
                n //= 5
                res += n
            return res

          
        l, r = 0, k + 1
        while l < r:
            mid = l + (r - l) // 2
            num = trailingZeros(mid)
            if num == k:
                return 5
            if num < k:
                l = mid + 1
            else:
                r = mid
        return 0