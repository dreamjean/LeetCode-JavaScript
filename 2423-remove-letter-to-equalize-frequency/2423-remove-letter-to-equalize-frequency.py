class Solution:
    def equalFrequency(self, word: str) -> bool:
        for i in range(len(word)):
            count = Counter(word[:i] + word[i+1:])
            if len(set(count.values())) == 1:
                return True
        return False