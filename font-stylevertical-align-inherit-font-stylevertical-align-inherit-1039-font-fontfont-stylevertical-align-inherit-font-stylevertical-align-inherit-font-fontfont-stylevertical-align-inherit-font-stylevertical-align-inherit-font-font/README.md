<h2><a href="https://leetcode.com/problems/minimum-score-triangulation-of-polygon/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1039 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多邊形的最小分數三角剖分</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有一個凸面</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多邊形，其中每個頂點都有一個整數值。</font><font style="vertical-align: inherit;">給定一個整數數組</font></font><code>values</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中</font></font><code>values[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是頂點的值</font><font style="vertical-align: inherit;">（即</font><strong><font style="vertical-align: inherit;">順時針順序</font></strong><font style="vertical-align: inherit;">）。</font></font><code>i<sup>th</sup></code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您會將</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多邊形</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三角化為</font></font><code>n - 2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">三角形。</font><font style="vertical-align: inherit;">對於每個三角形，該三角形的值是其頂點值的乘積，三角剖分的總分是三角</font></font><code>n - 2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">剖分中所有三角形的這些值的總和。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通過多邊形的某些三角剖分可以獲得的最小可能總分</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/25/shape1.jpg" style="width: 201px; height: 133px;">
<pre><strong>Input:</strong> values = [1,2,3]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The polygon is already triangulated, and the score of the only triangle is 6.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/25/shape2.jpg" style="width: 446px; height: 163px;">
<pre><strong>Input:</strong> values = [3,7,4,5]
<strong>Output:</strong> 144
<strong>Explanation:</strong> There are two triangulations, with possible scores: 3*7*5 + 4*5*7 = 245, or 3*4*5 + 3*4*7 = 144.<font></font>
The minimum score is 144.<font></font>
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/25/shape3.jpg" style="width: 207px; height: 163px;">
<pre><strong>Input:</strong> values = [1,3,1,4,1,5]
<strong>Output:</strong> 13
<strong>Explanation:</strong> The minimum score triangulation has score 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == values.length</code></li>
	<li><code>3 &lt;= n &lt;= 50</code></li>
	<li><code>1 &lt;= values[i] &lt;= 100</code></li>
</ul>
</div>