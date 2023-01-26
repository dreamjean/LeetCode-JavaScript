class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        dct = defaultdict(dict)
        for a, b, p in flights:
            dct[a][b] = p

        visit = [n+1]*n
        stack = [[0, src, 0]]
        heapq.heapify(stack)
        while stack:
            cost, pos, cnt = heapq.heappop(stack)
            if pos == dst:
                return cost
            if cnt >= visit[pos] or cnt > k:
                continue
            visit[pos] = cnt
            for nex in dct[pos]:
                heapq.heappush(stack, [cost+dct[pos][nex], nex, cnt+1])
        return -1