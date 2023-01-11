<h2><a href="https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1807 年</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评估字符串的括号对</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给你一个包含一些括号对的字符串</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，每对包含一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非空</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键。</font></font></p>

<ul>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，在字符串</font></font><code>"(name)is(age)yearsold"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中，有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含键</font></font><code>"name"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和的括号对</font></font><code>"age"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您知道各种键的值。</font><font style="vertical-align: inherit;">这由一个二维字符串数组表示，</font></font><code>knowledge</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中每个</font><font style="vertical-align: inherit;">表示键</font><font style="vertical-align: inherit;">的值为</font><font style="vertical-align: inherit;">。</font></font><code>knowledge[i] = [key<sub>i</sub>, value<sub>i</sub>]</code><font style="vertical-align: inherit;"></font><code>key<sub>i</sub></code><font style="vertical-align: inherit;"></font><code>value<sub>i</sub></code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的任务是评估</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">括号对。</font><font style="vertical-align: inherit;">当您评估包含一些 key 的括号对时</font><font style="vertical-align: inherit;">，您将：</font></font><code>key<sub>i</sub></code><font style="vertical-align: inherit;"></font></p>

<ul>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font><font style="vertical-align: inherit;">括号对替换为键对应的</font><font style="vertical-align: inherit;">.</font></font><code>key<sub>i</sub></code><font style="vertical-align: inherit;"></font><code>value<sub>i</sub></code><font style="vertical-align: inherit;"></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不知道密钥的值，则将</font><font style="vertical-align: inherit;">括号对替换为问号</font><font style="vertical-align: inherit;">（不带引号）。</font></font><code>key<sub>i</sub></code><font style="vertical-align: inherit;"></font><code>"?"</code><font style="vertical-align: inherit;"></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个密钥在您的</font></font><code>knowledge</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font><font style="vertical-align: inherit;">中不会有任何嵌套的括号</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">评估</font></em><em><strong><font style="vertical-align: inherit;">所有</font></strong></em><em><font style="vertical-align: inherit;">括号对</font></em><font style="vertical-align: inherit;">后返回结果字符串。</font></font><em><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></em></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> "bobistwoyearsold"
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
键“name”的值为“bob”，因此将“(name)”替换为“bob”。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
键“age”的值为“two”，因此将“(age)”替换为“two”。</font></font><font></font>
</pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> s = "hi(name)", knowledge = [["a","b"]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> "hi?"
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于您不知道键“name”的值，请将“(name)”替换为“?”。
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 3：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> "yesyesyesaaa"
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同一个键可以出现多次。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
键“a”的值为“yes”，因此将所有出现的“(a)”替换为“yes”。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
请注意，不评估不在括号对中的“a”。</font></font><font></font>
</pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= knowledge.length &lt;= 10<sup>5</sup></code></li>
	<li><code>knowledge[i].length == 2</code></li>
	<li><code>1 &lt;= key<sub>i</sub>.length, value<sub>i</sub>.length &lt;= 10</code></li>
	<li><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由小写英文字母和圆括号</font></font><code>'('</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和组成</font></font><code>')'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的每个左括号</font></font><code>'('</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都有</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个相应的右括号</font></font><code>')'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个括号对中的键</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是非空的。</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中不会有任何嵌套的括号对</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
	<li><code>key<sub>i</sub></code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由小写英文字母组成</font><font style="vertical-align: inherit;">。</font></font><code>value<sub>i</sub></code><font style="vertical-align: inherit;"></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每一个</font><font style="vertical-align: inherit;">都是</font><font style="vertical-align: inherit;">独一无二的。</font></font><code>key<sub>i</sub></code><font style="vertical-align: inherit;"></font><code>knowledge</code><font style="vertical-align: inherit;"></font></li>
</ul>
</div>