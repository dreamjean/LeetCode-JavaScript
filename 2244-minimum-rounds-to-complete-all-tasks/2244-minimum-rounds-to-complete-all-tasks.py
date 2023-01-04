class Solution:
    def minimumRounds(self, tasks: List[int]) -> int:
        freq = Counter(tasks).values()
        return -1 if 1 in freq else sum((num + 2) // 3 for num in freq)