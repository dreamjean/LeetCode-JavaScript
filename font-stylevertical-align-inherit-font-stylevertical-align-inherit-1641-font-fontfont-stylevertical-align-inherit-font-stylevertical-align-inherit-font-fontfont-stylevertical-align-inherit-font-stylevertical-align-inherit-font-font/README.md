<h2><a href="https://leetcode.com/problems/count-sorted-vowel-strings/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1641 年</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">計算排序的元音字符串</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">給定一個整數</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，返回長度為僅由元音字母 ( </font><em><font style="vertical-align: inherit;">,,,,,, </font></em><em><font style="vertical-align: inherit;">)</font></em><em><font style="vertical-align: inherit;">組成</font></em><em><font style="vertical-align: inherit;">並按</font></em><em><strong><font style="vertical-align: inherit;">字典順序排序的</font></strong></em><em><font style="vertical-align: inherit;">字符串</font></em><em><font style="vertical-align: inherit;">的</font></em></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">數量</font></font></em><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">。</font></em></font><code>n</code><em><font style="vertical-align: inherit;"></font></em><code>a</code><em><font style="vertical-align: inherit;"></font></em><code>e</code><em><font style="vertical-align: inherit;"></font></em><code>i</code><em><font style="vertical-align: inherit;"></font></em><code>o</code><em><font style="vertical-align: inherit;"></font></em><code>u</code><em><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果對於所有有效的</font><font style="vertical-align: inherit;">,與</font><font style="vertical-align: inherit;">字母表中</font><font style="vertical-align: inherit;">的相同或之前出現，則</font><font style="vertical-align: inherit;">字符串按</font><strong><font style="vertical-align: inherit;">字典順序排序</font></strong></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><code>i</code><font style="vertical-align: inherit;"></font><code>s[i]</code><font style="vertical-align: inherit;"></font><code>s[i+1]</code><font style="vertical-align: inherit;"></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 1
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 5
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解釋：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">僅由元音組成的 5 個排序字符串是</font></font><code>["a","e","i","o","u"].</code>
</pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 2
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 15
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解釋：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 15 個僅由元音組成的排序字符串是</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu"," oo”，“ou”，“uu”]。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
請注意，“ea”不是有效字符串，因為字母表中“e”位於“a”之後。</font></font><font></font>
</pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 3：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 33
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 66045
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">約束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 50</code>&nbsp;</li>
</ul>
</div>