<h2><a href="https://leetcode.com/problems/count-nice-pairs-in-an-array/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1814 年</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算数组中的好对</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定一个</font></font><code>nums</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由非负整数组成的数组。</font><font style="vertical-align: inherit;">让我们定义</font></font><code>rev(x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为非负整数的倒数</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如</font></font><code>rev(123) = 321</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">， 和</font></font><code>rev(120) = 21</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果一对索引</font><font style="vertical-align: inherit;">满足以下所有条件，那么它</font></font><code>(i, j)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的：</font></font></strong><font style="vertical-align: inherit;"></font></p>

<ul>
	<li><code>0 &lt;= i &lt; j &lt; nums.length</code></li>
	<li><code>nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nice 对的数量 indices</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于该数字可能太大，因此将其返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模数</font></font></strong> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>10<sup>9</sup> + 7</code><font style="vertical-align: inherit;"></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [42,11,1,97]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 2
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两对是：</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12。</font></font><font></font>
</pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [13,10,35,24,76]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 4
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div>