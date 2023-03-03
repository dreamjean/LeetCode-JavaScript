class TrieNode:
    def __init__(self):
        self.next = defaultdict(TrieNode)
        self.words = []
        
    def add_word(self, word):
        if len(self.words) < 3:
            self.words.append(word)
            

class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        trie = TrieNode()
        ans = []
        
        for product in sorted(products):
            node = trie
            for ch in product:
                node = node.next[ch]
                node.add_word(product)
                
        node = trie
        for ch in searchWord:
            node = node.next[ch]
            ans.append(node.words)
        return ans