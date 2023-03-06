class Trie:
    def __init__(self):
        self.root = {}
        
    def insert(self, num):
        node = self.root
        for i in range(14, -1, -1):
            bit = (num >> i) & 1
            if bit not in node:
                node[bit] = {"cnt": 0}
            node = node[bit]
            node["cnt"] += 1
            
    def search(self, num, limit):
        node, count = self.root, 0
        for i in range(14, -1, -1):
            if not node: 
                break
            lbit = (limit >> i) & 1
            nbit = (num >> i) & 1
            if lbit:
                if nbit in node:
                    count += node[nbit]["cnt"]
                node = node.get(1-nbit, {})
            else:
                node = node.get(nbit, {})
        return count

      
class Solution:
    def countPairs(self, nums: List[int], low: int, high: int) -> int:
        trie, ans = Trie(), 0
        for num in nums:
            ans += trie.search(num, high + 1) - trie.search(num, low)
            trie.insert(num)
        return ans
        