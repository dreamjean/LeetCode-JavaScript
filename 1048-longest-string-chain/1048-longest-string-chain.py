class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        seen = set(words)
        @cache
        def count(word):
            ans = 0
            for i in range(len(word)):
                next_word = word[:i] + word[i+1:]
                if next_word in seen:
                    ans = max(ans, count(next_word))
            return ans + 1
          
          
        return max(count(word) for word in words)