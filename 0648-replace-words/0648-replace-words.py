class TrieNode:
    def __init__(self):
        self.next = {}
        self.word = None
        
        
class Trie:
    def __init__(self):
        self.root = TrieNode()
        
    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.next.setdefault(ch, TrieNode())
        node.word = word
        
    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.next or node.word:
                break
            node = node.next[ch]
        return node.word if node.word else word
      

class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        trie = Trie()
        for word in dictionary:
            trie.insert(word)
            
        return ' '.join(trie.search(word) for word in sentence.split(' '))