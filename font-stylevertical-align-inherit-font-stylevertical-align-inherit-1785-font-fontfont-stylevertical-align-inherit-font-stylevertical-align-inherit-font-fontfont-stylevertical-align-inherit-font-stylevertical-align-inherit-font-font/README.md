<h2><a href="https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1785 年</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加以形成给定和的最少元素</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给你一个整数数组</font></font><code>nums</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和两个整数</font></font><code>limit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>goal</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该数组</font></font><code>nums</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个有趣的属性，即</font></font><code>abs(nums[i]) &lt;= limit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使数组总和等于 所需添加的最少元素数</font></font></em><code>goal</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该数组必须保持其属性</font></font><code>abs(nums[i]) &lt;= limit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，</font></font><code>abs(x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">if </font></font><code>x &gt;= 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>-x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则。</font></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [1,-1,1], limit = 3, goal = -4
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 2
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以将 -2 和 -3 相加，那么数组的和将为 1 - 1 + 1 - 2 - 3 = -4。
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [1,-10,9,1], limit = 100, goal = 0
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 1
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= limit &lt;= 10<sup>6</sup></code></li>
	<li><code>-limit &lt;= nums[i] &lt;= limit</code></li>
	<li><code>-10<sup>9</sup> &lt;= goal &lt;= 10<sup>9</sup></code></li>
</ul>
</div>