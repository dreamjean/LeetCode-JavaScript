<h2><a href="https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1798 年</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以创建的最大连续值数</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"></font><code>coins</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将获得一个长度为</font><font style="vertical-align: inherit;">整数的数组</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，代表</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您拥有的硬币。</font><font style="vertical-align: inherit;">硬币的价值</font><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您可以选择一些</font><font style="vertical-align: inherit;">硬币，使它们的价值总和为 ，</font><font style="vertical-align: inherit;">您就可以</font><strong><font style="vertical-align: inherit;">创造</font></strong><font style="vertical-align: inherit;">一些价值</font><font style="vertical-align: inherit;">。</font></font><code>i<sup>th</sup></code><font style="vertical-align: inherit;"></font><code>coins[i]</code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><code>x</code><font style="vertical-align: inherit;"></font><code>n</code><font style="vertical-align: inherit;"></font><code>x</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回您</font><em><strong><font style="vertical-align: inherit;">可以</font></strong></em><em><strong><font style="vertical-align: inherit;">用从</font></strong></em><em><strong><font style="vertical-align: inherit;">开始</font></strong></em><em><font style="vertical-align: inherit;">并</font></em><em><strong><font style="vertical-align: inherit;">包括</font></strong></em><em><font style="vertical-align: inherit;">的硬币生成</font></em></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的连续整数值的最大数量</font></font><strong><font style="vertical-align: inherit;"></font></strong> <strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong> </em><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，您可能拥有多个相同价值的硬币。</font></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> coins = [1,3]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 2
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以设置以下值：</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 0：取 []</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 1：取 [1]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可以从 0 开始制作 2 个连续的整数值。</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> coins = [1,1,1,4]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 8
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以设置以下值：</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 0：取 []</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 1：取 [1]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 2：取 [1,1]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 3：取 [1,1,1]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 4：取 [4]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 5：取 [4,1]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 6：取 [4,1,1]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 7：取 [4,1,1,1]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可以从 0 开始创建 8 个连续的整数值。</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 3：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nums = [1,4,10,3,1]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 20</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>coins.length == n</code></li>
	<li><code>1 &lt;= n &lt;= 4 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= coins[i] &lt;= 4 * 10<sup>4</sup></code></li>
</ul>
</div>