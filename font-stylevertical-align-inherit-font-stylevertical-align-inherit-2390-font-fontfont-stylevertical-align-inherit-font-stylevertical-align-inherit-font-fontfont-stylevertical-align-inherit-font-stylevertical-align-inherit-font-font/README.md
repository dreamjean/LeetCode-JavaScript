<h2><a href="https://leetcode.com/problems/removing-stars-from-a-string/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2390 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">從字符串中刪除星星</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">給你一個字符串</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中包含星星</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一次操作中，您可以：</font></font></p>

<ul>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在 中選擇一顆星</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移除最靠近</font><font style="vertical-align: inherit;">其</font><strong><font style="vertical-align: inherit;">左側的</font></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非星號</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符，並移除星號本身。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></li>
</ul>

<p><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">移除</font></em><em><strong><font style="vertical-align: inherit;">所有</font></strong></em><font style="vertical-align: inherit;">星星後返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">筆記：</font></font></strong></p>

<ul>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">將生成輸入，以便始終可以進行操作。</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以證明，生成的字符串將始終是唯一的。</font></font></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> s = "leet**cod*e"
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> "lecoe"
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解釋：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">從左到右執行刪除：</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 最接近第一顆星的字符</font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是“lee </font></font></sup><font style="vertical-align: inherit;"></font><strong><u><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">t</font></font></u></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> **cod*e”中的“t </font><font style="vertical-align: inherit;">”。</font><font style="vertical-align: inherit;">s 變為“lee*cod*e”。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 最接近第二顆星的字符</font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是“le </font></font></sup><font style="vertical-align: inherit;"></font><strong><u><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">e</font></font></u></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> *cod*e”中的“e” </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">s 變為“lecod*e”。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
- 最接近第三顆星的字符</font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是“leco </font></font></sup><font style="vertical-align: inherit;"></font><strong><u><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d</font></font></u></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> *e”中的“d” </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">s 變成“lecoe”。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
沒有更多的星星，所以我們返回“lecoe”。</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> s = "erase*****"
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ""
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解釋：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整個字符串被刪除，所以我們返回一個空字符串。
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">約束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由小寫英文字母和星號組成</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以對 執行上面的操作</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>
</div>