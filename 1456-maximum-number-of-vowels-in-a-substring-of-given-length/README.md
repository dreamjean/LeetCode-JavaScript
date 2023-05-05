<h2><a href="https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/">1456. Maximum Number of Vowels in a Substring of Given Length</a></h2><h3>Medium</h3><hr><div class="translated"><p class="translated">Given a string <code>s</code> and an integer <code>k</code>, return <em>the maximum number of vowel letters in any substring of </em><code>s</code><em> with length </em><code>k</code>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">给定一个字符串 s 和一个整数 k，返回 s 的任意长度为 k 的子串中元音字母的最大数量。</p>

<p class="translated"><strong>Vowel letters</strong> in English are <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and <code>'u'</code>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">英语中的元音字母是“a”、“e”、“i”、“o”和“u”。</p>

<p class="translated">&nbsp;</p>
<p class="translated"><strong class="example">Example 1:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 1：</p>

<pre><strong>Input:</strong> s = "abciiidef", k = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> The substring "iii" contains 3 vowel letters.
</pre>

<p class="translated"><strong class="example">Example 2:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 2：</p>

<pre><strong>Input:</strong> s = "aeiou", k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> Any substring of length 2 contains 2 vowels.
</pre>

<p class="translated"><strong class="example">Example 3:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 3：</p>

<pre><strong>Input:</strong> s = "leetcode", k = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> "lee", "eet" and "ode" contain 2 vowels.
</pre>

<p class="translated">&nbsp;</p>
<p class="translated"><strong>Constraints:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">约束：</p>

<ul class="translated">
	<li class="translated"><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">1 &lt;= 长度 &lt;= 105</li>
	<li class="translated"><code>s</code> consists of lowercase English letters.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">s 由小写英文字母组成。</li>
	<li class="translated"><code>1 &lt;= k &lt;= s.length</code></li>
</ul>
</div>