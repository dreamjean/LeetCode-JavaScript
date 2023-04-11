<h2><a href="https://leetcode.com/problems/removing-stars-from-a-string/">2390. Removing Stars From a String</a></h2><h3>Medium</h3><hr><div class="translated"><p class="translated">You are given a string <code>s</code>, which contains stars <code>*</code>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">给定一个字符串 s，其中包含星号 *。</p>

<p class="translated">In one operation, you can:</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">在一次操作中，您可以：</p>

<ul class="translated">
	<li class="translated">Choose a star in <code>s</code>.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">选择 s 中的一颗星。</li>
	<li class="translated">Remove the closest <strong>non-star</strong> character to its <strong>left</strong>, as well as remove the star itself.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">移除其左侧最近的非星形角色，并移除星形本身。</li>
</ul>

<p class="translated">Return <em>the string after <strong>all</strong> stars have been removed</em>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">移除所有星星后返回字符串。</p>

<p class="translated"><strong>Note:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">笔记：</p>

<ul class="translated">
	<li class="translated">The input will be generated such that the operation is always possible.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">将生成输入，以便始终可以进行操作。</li>
	<li class="translated">It can be shown that the resulting string will always be unique.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">可以证明，生成的字符串将始终是唯一的。</li>
</ul>

<p class="translated">&nbsp;</p>
<p class="translated"><strong class="example">Example 1:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 1：</p>

<pre><strong>Input:</strong> s = "leet**cod*e"
<strong>Output:</strong> "lecoe"
<strong>Explanation:</strong> Performing the removals from left to right:
- The closest character to the 1<sup>st</sup> star is 't' in "lee<strong><u>t</u></strong>**cod*e". s becomes "lee*cod*e".
- The closest character to the 2<sup>nd</sup> star is 'e' in "le<strong><u>e</u></strong>*cod*e". s becomes "lecod*e".
- The closest character to the 3<sup>rd</sup> star is 'd' in "leco<strong><u>d</u></strong>*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".</pre>

<p class="translated"><strong class="example">Example 2:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 2：</p>

<pre><strong>Input:</strong> s = "erase*****"
<strong>Output:</strong> ""
<strong>Explanation:</strong> The entire string is removed, so we return an empty string.
</pre>

<p class="translated">&nbsp;</p>
<p class="translated"><strong>Constraints:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">约束：</p>

<ul class="translated">
	<li class="translated"><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">1 &lt;= 长度 &lt;= 105</li>
	<li class="translated"><code>s</code> consists of lowercase English letters and stars <code>*</code>.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">s由小写英文字母和星号*组成。</li>
	<li class="translated">The operation above can be performed on <code>s</code>.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">上面的操作可以在 s 上执行。</li>
</ul>
</div>