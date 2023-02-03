<h2><a href="https://leetcode.com/problems/path-with-minimum-effort/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1631 年</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最省力的路径</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是一名徒步旅行者，正在为即将到来的徒步旅行做准备。</font><font style="vertical-align: inherit;">给定</font></font><code>heights</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个大小为 2D 的数组</font></font><code>rows x columns</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中</font></font><code>heights[row][col]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代表单元格的高度</font></font><code>(row, col)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您位于左上角的单元格 ，</font></font><code>(0, 0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您希望前往右下角的单元格</font></font><code>(rows-1, columns-1)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（即&nbsp;</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0-indexed</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">您可以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向上</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">、</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向下</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">、</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向左</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向右移动</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且您希望找到一条最</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">省力</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的路线。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路线的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">努力</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是路线的两个连续单元格之间的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大绝对</font></font></strong><strong> </strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高度差。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font><em><font style="vertical-align: inherit;">从左上角单元格行进到右下角单元格所需</font></em></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的最小</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">力。</font></font></strong><font style="vertical-align: inherit;"></font></em></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/04/ex1.png" style="width: 300px; height: 300px;"></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> heights = [[1,2,2],[3,8,2],[5,3,5]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 2
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [1,3,5,3,5] 的路径有一个连续单元格中的最大绝对差为 2。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这比 [1,2,2,2,5] 的路线要好，其中最大绝对差为 3。</font></font><font></font>
</pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/04/ex2.png" style="width: 300px; height: 300px;"></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> heights = [[1,2,3],[3,8,4],[5,3,5]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 1
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [1,2,3,4,5] 的路径有一个连续单元格最大绝对差为1，优于路线[1,3,5,3,5]。
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 3：</font></font></strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/04/ex3.png" style="width: 300px; height: 300px;">
<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高度 = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2, 1],[1,1,1,2,1]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 0
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这条路线不需要任何努力。
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>rows == heights.length</code></li>
	<li><code>columns == heights[i].length</code></li>
	<li><code>1 &lt;= rows, columns &lt;= 100</code></li>
	<li><code>1 &lt;= heights[i][j] &lt;= 10<sup>6</sup></code></li>
</ul></div>