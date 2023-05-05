class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums
        self.tree = [0] * (4 * len(self.nums))
        self.build(1, 0, len(self.nums) - 1)
        
    def build(self, node, start, end):
        if start == end:
            self.tree[node] = self.nums[start]
            return
        left_node, right_node = node * 2, node * 2 + 1
        mid = (start + end) // 2
        self.build(left_node, start, mid)
        self.build(right_node, mid + 1, end)
        self.tree[node] = self.tree[left_node] + self.tree[right_node]
        
        
    def updateTree(self, node, start, end, index, val):
        if start == end:
            self.nums[index] = val
            self.tree[node] = val
            return
        left_node, right_node = node * 2, node * 2 + 1
        mid = (start + end) // 2
        if index >= start and index <= mid:
            self.updateTree(left_node, start, mid, index, val)
        else:
            self.updateTree(right_node, mid + 1, end, index, val)
        self.tree[node] = self.tree[left_node] + self.tree[right_node]
        

    def update(self, index: int, val: int) -> None:
        return self.updateTree(1, 0, len(self.nums) - 1, index, val)
        
    def querySum(self, node, start, end, left, right):
        if start > right or end < left:
            return 0
        if start >= left and end <= right:
            return self.tree[node]
        mid = (start + end) // 2
        return self.querySum(node * 2, start, mid, left, right) + self.querySum(node * 2 + 1, mid + 1, end, left, right)

    def sumRange(self, left: int, right: int) -> int:
        return self.querySum(1, 0, len(self.nums) - 1, left, right)


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)