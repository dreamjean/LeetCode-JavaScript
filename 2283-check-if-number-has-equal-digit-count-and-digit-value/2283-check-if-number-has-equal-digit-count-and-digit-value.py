class Solution:
    def digitCount(self, num: str) -> bool:
        return all(int(d) == Counter(num)[str(i)] for i, d in enumerate(num))