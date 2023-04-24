<h2><a href="https://leetcode.com/problems/coin-change-ii/">518. Coin Change II</a></h2><h3>Medium</h3><hr><div class="translated"><p class="translated">You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">给你一个整数数组 coins 代表不同面额的硬币和一个整数 amount 代表总金额。</p>

<p class="translated">Return <em>the number of combinations that make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>0</code>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">返回构成该金额的组合数。如果该金额不能由任何硬币组合组成，则返回 0。</p>

<p class="translated">You may assume that you have an infinite number of each kind of coin.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">你可以假设你有无限数量的每种硬币。</p>

<p class="translated">The answer is <strong>guaranteed</strong> to fit into a signed <strong>32-bit</strong> integer.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">答案保证适合带符号的 32 位整数。</p>

<p class="translated">&nbsp;</p>
<p class="translated"><strong class="example">Example 1:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 1：</p>

<pre><strong>Input:</strong> amount = 5, coins = [1,2,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
</pre>

<p class="translated"><strong class="example">Example 2:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 2：</p>

<pre><strong>Input:</strong> amount = 3, coins = [2]
<strong>Output:</strong> 0
<strong>Explanation:</strong> the amount of 3 cannot be made up just with coins of 2.
</pre>

<p class="translated"><strong class="example">Example 3:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 3：</p>

<pre><strong>Input:</strong> amount = 10, coins = [10]
<strong>Output:</strong> 1
</pre>

<p class="translated">&nbsp;</p>
<p class="translated"><strong>Constraints:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">约束：</p>

<ul class="translated">
	<li class="translated"><code>1 &lt;= coins.length &lt;= 300</code></li>
	<li class="translated"><code>1 &lt;= coins[i] &lt;= 5000</code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">1 &lt;= 硬币[i] &lt;= 5000</li>
	<li class="translated">All the values of <code>coins</code> are <strong>unique</strong>.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">硬币的所有价值都是独一无二的。</li>
	<li class="translated"><code>0 &lt;= amount &lt;= 5000</code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">0 &lt;= 金额 &lt;= 5000</li>
</ul>
</div>