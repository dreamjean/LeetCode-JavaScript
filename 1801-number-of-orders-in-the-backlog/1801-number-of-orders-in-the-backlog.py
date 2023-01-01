class Solution:
    def getNumberOfBacklogOrders(self, orders: List[List[int]]) -> int:
        buy, sell = [], []
        ans = 0
        
        for price, amount, orderType in orders:
            if orderType == 0:
                heapq.heappush(buy, [-price, amount])
            else:
                heapq.heappush(sell, [price, amount])
                
            while buy and sell and sell[0][0] <= -buy[0][0]:
                k = min(sell[0][1], buy[0][1])
                sell[0][1] -= k
                buy[0][1] -= k
                if not sell[0][1]:
                    heapq.heappop(sell)
                if not buy[0][1]:
                    heapq.heappop(buy)
              
        return sum(amount for _, amount in buy + sell) % (10 ** 9 + 7)
                