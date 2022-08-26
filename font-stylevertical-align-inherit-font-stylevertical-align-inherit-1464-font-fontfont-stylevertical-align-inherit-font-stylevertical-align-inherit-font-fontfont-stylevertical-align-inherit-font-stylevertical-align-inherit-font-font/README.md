<h2><a href="https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1464 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组中两个元素的最大乘积</font></font></a></h2><h3>Easy</h3><hr><div><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定整数数组</font></font><code>nums</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您将选择该数组的两个不同索引</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>j</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回 的最大值</font></font></em> <code>(nums[i]-1)*(nums[j]-1)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
</font></font><p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [3,4,5,2]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 12 
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择索引 i=1 和 j=2（索引从 0 开始），您将得到最大值，即 (nums[1 ]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12。 
</font></font></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [1,5,4,5]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 16
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择索引 i=1 和 j=3（索引从 0 开始），你将得到 (5-1)*(5- 1) = 16。
</font></font></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 3：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [3,7]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 12
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 500</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10^3</code></li>
</ul>
</div>