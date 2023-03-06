class Trie:
    def __init__(self):
        self.root = {}
        
    def insert(self, num):
        node = self.root
        for i in range(31, -1, -1):
            bit = (num >> i) & 1
            if bit not in node:
                node[bit] = {}
            node = node[bit]
            
    def query(self, num):        
        node, ans = self.root, 0
        for i in range(31, -1, -1):
            bit = (num >> i) & 1
            if not node:
                return -1
            if 1-bit in node:
                ans |= (1 << i)
                node = node[1-bit]
            else:
                node = node[bit]            
        return ans
              

class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        nums.sort()
        queries = sorted(enumerate(queries), key=lambda x:x[1][1])
        trie = Trie()
        ans = [-1] * len(queries)
        j = 0
        for i, (x, m) in queries:
            while j < len(nums) and nums[j] <= m:
                trie.insert(nums[j])
                j += 1
            ans[i] = trie.query(x)
        return ans