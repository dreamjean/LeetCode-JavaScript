class Solution:
    def maxAverageRatio(self, classes: List[List[int]], extraStudents: int) -> float:
        heap = [(a / b - (a+1) / (b+1), a, b) for a, b in classes]
        heapq.heapify(heap)
        while extraStudents:
            _, a, b = heapq.heappop(heap)
            a, b = a + 1, b + 1
            heapq.heappush(heap, (a / b - (a+1) / (b+1), a, b))
            extraStudents -= 1
        return sum(a / b for _, a, b in heap) / len(heap)