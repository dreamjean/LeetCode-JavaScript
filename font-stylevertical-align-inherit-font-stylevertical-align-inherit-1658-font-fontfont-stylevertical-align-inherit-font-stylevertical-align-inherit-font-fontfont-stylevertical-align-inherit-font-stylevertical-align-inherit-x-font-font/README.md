<h2><a href="https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1658 年</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将 X 减少到零的最少操作</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给你一个整数数组</font></font><code>nums</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和一个整数</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在一个操作中，您可以从数组中删除最左边或最右边的元素，</font></font><code>nums</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后从 中减去它的值</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请注意，这</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会修改</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组以供将来操作。</font></font></p>

<p><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">如果可能</font></em><font style="vertical-align: inherit;">，返回要</font><em><strong><font style="vertical-align: inherit;">精确</font></strong></em><em><font style="vertical-align: inherit;">减少</font></em><em><font style="vertical-align: inherit;">到</font></em></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最小操作数</font></font></strong><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">，否则返回</font></em><font style="vertical-align: inherit;">。</font></font><code>x</code> <em><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong></em> <code>0</code> <em><font style="vertical-align: inherit;"></font></em><em><font style="vertical-align: inherit;"></font></em><code>-1</code><font style="vertical-align: inherit;"></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [1,1,4,2,3], x = 5
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 2
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最优解是移除最后两个元素以将 x 归零。
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [5,6,7,8,9], x = 4
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -1
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 3：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [3,2,20,1,1,3], x = 10
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 5
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最优解是移除最后三个元素和前两个元素（总共 5 次操作）以减少 x归零。
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= x &lt;= 10<sup>9</sup></code></li>
</ul>
</div>