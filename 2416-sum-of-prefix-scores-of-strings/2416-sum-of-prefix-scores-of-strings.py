class TrieNode:
    def __init__(self):
        self.next = [None] * 26
        self.count = 0
        
  
class Trie:
    def __init__(self):
        self.root = TrieNode()
        
    def insert(self, word):
        node = self.root
        for ch in word:
            i = ord(ch) - ord('a')
            if not node.next[i]:
                node.next[i] = TrieNode()
            node = node.next[i]
            node.count += 1
    
    def getScore(self, word):
        node, score = self.root, 0
        for ch in word:
            i = ord(ch) - ord('a')
            node = node.next[i]
            score += node.count
        return score
      

class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
        trie = Trie()

        for word in words:
            trie.insert(word)

        return [trie.getScore(word) for word in words]