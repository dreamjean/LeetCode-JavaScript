<h2><a href="https://leetcode.com/problems/koko-eating-bananas/">875. Koko Eating Bananas</a></h2><h3>Medium</h3><hr><div class="translated"><p class="translated">Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>i<sup>th</sup></code> pile has <code>piles[i]</code> bananas. The guards have gone and will come back in <code>h</code> hours.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">可可喜欢吃香蕉。有 n 堆香蕉，第 i 堆有 piles[i] 根香蕉。警卫已经离开，将在 h 小时后回来。</p>

<p class="translated">Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, she chooses some pile of bananas and eats <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, she eats all of them instead and will not eat any more bananas during this hour.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">Koko 可以决定她每小时吃香蕉 k 的速度。每小时，她选择一些香蕉，并从那堆香蕉中吃掉 k 个香蕉。如果一堆香蕉少于 k 根，她会吃掉所有香蕉，并且在这一小时内不再吃香蕉。</p>

<p class="translated">Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">Koko 喜欢慢慢吃，但还是想在警卫回来之前吃完所有的香蕉。</p>

<p class="translated">Return <em>the minimum integer</em> <code>k</code> <em>such that she can eat all the bananas within</em> <code>h</code> <em>hours</em>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">返回使她可以在 h 小时内吃完所有香蕉的最小整数 k。</p>

<p class="translated">&nbsp;</p>
<p class="translated"><strong class="example">Example 1:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 1：</p>

<pre><strong>Input:</strong> piles = [3,6,7,11], h = 8
<strong>Output:</strong> 4
</pre>

<p class="translated"><strong class="example">Example 2:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 2：</p>

<pre><strong>Input:</strong> piles = [30,11,23,4,20], h = 5
<strong>Output:</strong> 30
</pre>

<p class="translated"><strong class="example">Example 3:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 3：</p>

<pre><strong>Input:</strong> piles = [30,11,23,4,20], h = 6
<strong>Output:</strong> 23
</pre>

<p class="translated">&nbsp;</p>
<p class="translated"><strong>Constraints:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">约束：</p>

<ul class="translated">
	<li class="translated"><code>1 &lt;= piles.length &lt;= 10<sup>4</sup></code></li>
	<li class="translated"><code>piles.length &lt;= h &lt;= 10<sup>9</sup></code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">桩.length &lt;= h &lt;= 109</li>
	<li class="translated"><code>1 &lt;= piles[i] &lt;= 10<sup>9</sup></code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">1 &lt;= 堆 [i] &lt;= 109</li>
</ul>
</div>