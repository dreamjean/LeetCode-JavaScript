<h2><a href="https://leetcode.com/problems/maximum-ice-cream-bars/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1833 年</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大冰淇淋吧</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个闷热的夏日，一个男孩想买一些冰淇淋棒。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在商店里，有</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">冰淇淋吧。</font></font><code>costs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定一个length</font><font style="vertical-align: inherit;">数组</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中</font></font><code>costs[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">冰淇淋棒的硬币价格。</font><font style="vertical-align: inherit;">男孩最初有</font><font style="vertical-align: inherit;">硬币可以花，他想买尽可能多的冰淇淋棒。&nbsp;</font></font><code>i<sup>th</sup></code><font style="vertical-align: inherit;"></font><code>coins</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回男孩可以用</font><em><font style="vertical-align: inherit;">硬币</font></em><em><font style="vertical-align: inherit;">购买的冰淇淋棒的</font></em></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数量。</font></font></strong><font style="vertical-align: inherit;"></font></em><code>coins</code><em><font style="vertical-align: inherit;"></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">男孩可以按任意顺序购买冰淇淋棒。</font></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong>Input:</strong> costs = [1,3,2,4,1], coins = 7
<strong>Output:</strong> 4
<strong>Explanation: </strong>The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> costs = [10,6,8,7,7,8], coins = 5
<strong>Output:</strong> 0
<strong>Explanation: </strong>The boy cannot afford any of the ice cream bars.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> costs = [1,6,3,1,2,5], coins = 20
<strong>Output:</strong> 6
<strong>Explanation: </strong>The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>costs.length == n</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= costs[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= coins &lt;= 10<sup>8</sup></code></li>
</ul></div>