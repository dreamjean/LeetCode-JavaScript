class Solution:
    def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
        rooms = list(range(n))
        using = []
        count = [0] * n
        ans = 0
        for start, end in sorted(meetings):
            while using and using[0][0] <= start:
                heappush(rooms, heappop(using)[1])
            if rooms:
                r = heappop(rooms)
                heappush(using, (end, r))
            else:
                t, r = heappop(using)
                heappush(using, (t + end - start, r))
            count[r] += 1
        for i, c in enumerate(count):
            if c > count[ans]:
                ans = i
        return ans
            