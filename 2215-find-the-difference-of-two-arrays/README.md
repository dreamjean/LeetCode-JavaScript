<h2><a href="https://leetcode.com/problems/find-the-difference-of-two-arrays/">2215. Find the Difference of Two Arrays</a></h2><h3>Easy</h3><hr><div class="translated"><p class="translated">Given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code>, return <em>a list</em> <code>answer</code> <em>of size</em> <code>2</code> <em>where:</em></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">给定两个 0 索引整数数组 nums1 和 nums2，返回大小为 2 的列表答案，其中：</p>

<ul class="translated">
	<li class="translated"><code>answer[0]</code> <em>is a list of all <strong>distinct</strong> integers in</em> <code>nums1</code> <em>which are <strong>not</strong> present in</em> <code>nums2</code><em>.</em></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">answer[0] 是 nums1 中不存在于 nums2 中的所有不同整数的列表。</li>
	<li class="translated"><code>answer[1]</code> <em>is a list of all <strong>distinct</strong> integers in</em> <code>nums2</code> <em>which are <strong>not</strong> present in</em> <code>nums1</code>.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">answer[1] 是 nums2 中不存在于 nums1 中的所有不同整数的列表。</li>
</ul>

<p class="translated"><strong>Note</strong> that the integers in the lists may be returned in <strong>any</strong> order.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">请注意，列表中的整数可以按任何顺序返回。</p>

<p class="translated">&nbsp;</p>
<p class="translated"><strong class="example">Example 1:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 1：</p>

<pre><strong>Input:</strong> nums1 = [1,2,3], nums2 = [2,4,6]
<strong>Output:</strong> [[1,3],[4,6]]
<strong>Explanation:
</strong>For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].</pre>

<p class="translated"><strong class="example">Example 2:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 2：</p>

<pre><strong>Input:</strong> nums1 = [1,2,3,3], nums2 = [1,1,2,2]
<strong>Output:</strong> [[3],[]]
<strong>Explanation:
</strong>For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
</pre>

<p class="translated">&nbsp;</p>
<p class="translated"><strong>Constraints:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">约束：</p>

<ul>
	<li class="translated"><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li>
	<li class="translated"><code>-1000 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li>
</ul>
</div>