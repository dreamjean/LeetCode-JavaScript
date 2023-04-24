<h2><a href="https://leetcode.com/problems/coin-change/">322. Coin Change</a></h2><h3>Medium</h3><hr><div class="translated"><p class="translated">You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">给你一个整数数组 coins 代表不同面额的硬币和一个整数 amount 代表总金额。</p>

<p class="translated">Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">返回弥补该金额所需的最少数量的硬币。如果硬币的任何组合都无法弥补该金额，则返回 -1。</p>

<p class="translated">You may assume that you have an infinite number of each kind of coin.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">你可以假设你有无限数量的每种硬币。</p>

<p class="translated">&nbsp;</p>
<p class="translated"><strong class="example">Example 1:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 1：</p>

<pre><strong>Input:</strong> coins = [1,2,5], amount = 11
<strong>Output:</strong> 3
<strong>Explanation:</strong> 11 = 5 + 5 + 1
</pre>

<p class="translated"><strong class="example">Example 2:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 2：</p>

<pre><strong>Input:</strong> coins = [2], amount = 3
<strong>Output:</strong> -1
</pre>

<p class="translated"><strong class="example">Example 3:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 3：</p>

<pre><strong>Input:</strong> coins = [1], amount = 0
<strong>Output:</strong> 0
</pre>

<p class="translated">&nbsp;</p>
<p class="translated"><strong>Constraints:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">约束：</p>

<ul class="translated">
	<li class="translated"><code>1 &lt;= coins.length &lt;= 12</code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">1 &lt;= 硬币长度 &lt;= 12</li>
	<li class="translated"><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">1 &lt;= 硬币[i] &lt;= 231 - 1</li>
	<li class="translated"><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">0 &lt;= 数量 &lt;= 104</li>
</ul>
</div>