class Solution:
    def maximumGood(self, statements: List[List[int]]) -> int:
        def checkGoodCount(mask):
            cnt = 0
            for i in range(n):
                if mask >> i & 1 == 0:
                    continue
                for j in range(n):
                    num = statements[i][j]
                    if num < 2 and num != mask >> j & 1:
                        return False, 0
                cnt += 1
            return True, cnt
          
        
        n, ans = len(statements), 0
        for mask in range(1, 1 << n):
            flag, count = checkGoodCount(mask)
            if flag and count > ans:
                ans = count
        return ans

            
                    