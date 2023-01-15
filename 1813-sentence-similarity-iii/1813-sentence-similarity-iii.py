class Solution:
    def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
        word1, word2 = sentence1.split(), sentence2.split()
        n1, n2 = map(len, (word1, word2))
        i = 0
        
        if n1 > n2:
            return self.areSentencesSimilar(sentence2, sentence1)
        
        while i < n1 and word1[i] == word2[i]:
            i += 1
          
        while i < n1 and word1[i] == word2[n2 - n1 + i]:
            i += 1
        return i == n1