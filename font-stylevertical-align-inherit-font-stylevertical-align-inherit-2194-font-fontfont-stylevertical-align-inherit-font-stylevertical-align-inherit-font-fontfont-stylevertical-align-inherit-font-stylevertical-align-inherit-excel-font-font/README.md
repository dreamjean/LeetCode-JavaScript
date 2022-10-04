<h2><a href="https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2194 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Excel 工作表范围内的单元格</font></font></a></h2><h3>Easy</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Excel 工作表的单元格</font></font><code>(r, c)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示为字符串</font></font><code>"&lt;col&gt;&lt;row&gt;"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中：</font></font></p>

<ul>
	<li><code>&lt;col&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示单元格的列号</font></font><code>c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它由</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字母表示</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。

	</font></font><ul>
		<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font><font style="vertical-align: inherit;">列由</font><font style="vertical-align: inherit;">、</font><font style="vertical-align: inherit;">by </font><font style="vertical-align: inherit;">、</font><font style="vertical-align: inherit;">by</font><font style="vertical-align: inherit;">等表示。</font></font><code>1<sup>st</sup></code><font style="vertical-align: inherit;"></font><code>'A'</code><font style="vertical-align: inherit;"></font><code>2<sup>nd</sup></code><font style="vertical-align: inherit;"></font><code>'B'</code><font style="vertical-align: inherit;"></font><code>3<sup>rd</sup></code><font style="vertical-align: inherit;"></font><code>'C'</code><font style="vertical-align: inherit;"></font></li>
	</ul>
	</li>
	<li><code>&lt;row&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是单元格的行号</font></font><code>r</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">行由</font><strong><font style="vertical-align: inherit;">整数</font></strong><font style="vertical-align: inherit;">表示。</font></font><code>r<sup>th</sup></code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong> <code>r</code><font style="vertical-align: inherit;"></font></li>
</ul>

<p><font style="vertical-align: inherit;"></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp;给您一个格式</font><font style="vertical-align: inherit;">为 的字符串</font></font><code>"&lt;col1&gt;&lt;row1&gt;:&lt;col2&gt;&lt;row2&gt;"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中</font></font><code>&lt;col1&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代表列</font></font><code>c1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;row1&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代表行</font></font><code>r1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;col2&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代表列</font></font><code>c2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;row2&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代表行</font></font><code>r2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如</font></font><code>r1 &lt;= r2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>c1 &lt;= c2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font><em><font style="vertical-align: inherit;">和</font></em></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"></font></strong></em> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单元格</font><em><strong><font style="vertical-align: inherit;">列表</font></strong></em></font><code>(x, y)</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单元格应以&nbsp;</font><font style="vertical-align: inherit;">上述格式表示为</font><strong><font style="vertical-align: inherit;">字符串，并按</font></strong><strong><font style="vertical-align: inherit;">非递减</font></strong><font style="vertical-align: inherit;">顺序首先按列排序，然后按行排序。</font></font><code>r1 &lt;= x &lt;= r2</code> <em><font style="vertical-align: inherit;"></font></em> <code>c1 &lt;= y &lt;= c2</code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/02/08/ex1drawio.png" style="width: 250px; height: 160px;">
<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> s = "K1:L2"
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ["K1","K2","L1","L2"]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
上图显示了应该出现在列表中的单元格。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
红色箭头表示单元格的显示顺序。</font></font><font></font>
</pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/02/09/exam2drawio.png" style="width: 500px; height: 50px;">
<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> s = "A1:F1"
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ["A1","B1","C1","D1","E1","F1"]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
上图显示了应该出现在列表中的单元格。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
红色箭头表示单元格应呈现的顺序。</font></font><font></font>
</pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>s.length == 5</code></li>
	<li><code>'A' &lt;= s[0] &lt;= s[3] &lt;= 'Z'</code></li>
	<li><code>'1' &lt;= s[1] &lt;= s[4] &lt;= '9'</code></li>
	<li><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由大写英文字母、数字和</font></font><code>':'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.</font></font></li>
</ul>
</div>