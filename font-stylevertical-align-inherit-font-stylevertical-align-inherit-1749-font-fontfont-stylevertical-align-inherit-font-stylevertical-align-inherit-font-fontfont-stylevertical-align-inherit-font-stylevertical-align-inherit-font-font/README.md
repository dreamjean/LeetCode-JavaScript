<h2><a href="https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1749 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何子数组的最大绝对和</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你得到一个整数数组</font></font><code>nums</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">子数组</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对和</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">。</font></font><code>[nums<sub>l</sub>, nums<sub>l+1</sub>, ..., nums<sub>r-1</sub>, nums<sub>r</sub>]</code><font style="vertical-align: inherit;"></font><code>abs(nums<sub>l</sub> + nums<sub>l+1</sub> + ... + nums<sub>r-1</sub> + nums<sub>r</sub>)</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的任何</font><strong><font style="vertical-align: inherit;">（可能为空）</font></strong><font style="vertical-align: inherit;">子数组的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对和</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></em><code>nums</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font><code>abs(x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义如下：</font></font></p>

<ul>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是负整数，则</font></font><code>abs(x) = -x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是非负整数，则</font></font><code>abs(x) = x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font></li>
</ul>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [1,-3,2,3,-4]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 5
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子数组 [2,3] 的绝对和 = abs(2+3) = abs(5) = 5。
</font></font></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [2,-5,1,-4,3,-2]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 8
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子数组 [-5,1,-4] 的绝对和 = abs(-5+1-4) =绝对（-8）= 8。
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div>