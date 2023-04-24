<h2><a href="https://leetcode.com/problems/last-stone-weight/">1046. Last Stone Weight</a></h2><h3>Easy</h3><hr><div class="translated"><p class="translated">You are given an array of integers <code>stones</code> where <code>stones[i]</code> is the weight of the <code>i<sup>th</sup></code> stone.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">给定一个整数数组 stones，其中 stones[i] 是第 i 个石头的重量。</p>

<p class="translated">We are playing a game with the stones. On each turn, we choose the <strong>heaviest two stones</strong> and smash them together. Suppose the heaviest two stones have weights <code>x</code> and <code>y</code> with <code>x &lt;= y</code>. The result of this smash is:</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">我们正在玩石头游戏。在每一轮中，我们选择最重的两块石头并将它们砸在一起。假设最重的两块石头的重量为 x 和 y，且 x &lt;= y。这次粉碎的结果是：</p>

<ul class="translated">
	<li class="translated">If <code>x == y</code>, both stones are destroyed, and</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">如果 x == y，两块石头都被摧毁，并且</li>
	<li class="translated">If <code>x != y</code>, the stone of weight <code>x</code> is destroyed, and the stone of weight <code>y</code> has new weight <code>y - x</code>.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">如果 x != y，重量为 x 的石头被摧毁，重量为 y 的石头有新的重量 y - x。</li>
</ul>

<p class="translated">At the end of the game, there is <strong>at most one</strong> stone left.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">游戏结束时，最多只剩下一颗棋子。</p>

<p class="translated">Return <em>the weight of the last remaining stone</em>. If there are no stones left, return <code>0</code>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">返回最后剩下的石头的重量。如果没有剩余的石头，则返回 0。</p>

<p class="translated">&nbsp;</p>
<p class="translated"><strong class="example">Example 1:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 1：</p>

<pre><strong>Input:</strong> stones = [2,7,4,1,8,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
</pre>

<p class="translated"><strong class="example">Example 2:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 2：</p>

<pre><strong>Input:</strong> stones = [1]
<strong>Output:</strong> 1
</pre>

<p class="translated">&nbsp;</p>
<p class="translated"><strong>Constraints:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">约束：</p>

<ul class="translated">
	<li class="translated"><code>1 &lt;= stones.length &lt;= 30</code></li>
	<li class="translated"><code>1 &lt;= stones[i] &lt;= 1000</code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">1 &lt;= 石头[i] &lt;= 1000</li>
</ul>
</div>