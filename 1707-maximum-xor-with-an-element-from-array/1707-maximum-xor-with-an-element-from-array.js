/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function(nums, queries) {

    // 字典树
    const trie = [null, null];
    const HIGH_BIT = 30;

    function insert(val) {
        // use node to keep track of the trie
        let node = trie;
        for (let i = HIGH_BIT - 1; i >= 0; --i) {
            const bit = (val >> i) & 1;
            if (node[bit] === null) {
                node[bit] = [null, null];
            }
            node = node[bit];
        }
    }

    function getMaxXor(val) {
        let ans = 0;
        let node = trie;
        for (let i = HIGH_BIT - 1; i >= 0; --i) {
            let bit = (val >> i) & 1;
            if (node[bit ^ 1] !== null) {
                ans |= 1 << i;
                bit ^= 1;
            }
            node = node[bit];
        }
        return ans;
    }

    queries.forEach((v, i) => v.push(i));
    queries.sort((a, b) => a[1] - b[1]);
    const qlen = queries.length;
    const ans = new Array(qlen);
    let idx = 0;

    nums.sort((a, b) => a - b);
    const n = nums.length;
    for (const q of queries) {
        const x = q[0];
        const m = q[1];
        const qid = q[2];

        while (idx < n && nums[idx] <= m) {
            insert(nums[idx]);
            ++idx;
        }
        if (idx === 0) {
            ans[qid] = -1;
        } else {
            ans[qid] = getMaxXor(x);
        }
    }

    return ans;
};