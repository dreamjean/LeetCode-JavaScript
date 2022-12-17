<h2><a href="https://leetcode.com/problems/couples-holding-hands/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">765 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情侣牵手</font></font></a></h2><h3>Hard</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情侣坐在</font></font><code>2n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">排成一排的座位上，想要牵手。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人和座位由一个整数数组表示，</font></font><code>row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中</font></font><code>row[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">坐在座位上的人的 ID。</font><font style="vertical-align: inherit;">这些对是按顺序编号的，第一对是</font><font style="vertical-align: inherit;">，第二对是</font><font style="vertical-align: inherit;">，依此类推，最后一对是</font><font style="vertical-align: inherit;">。</font></font><code>i<sup>th</sup></code><font style="vertical-align: inherit;"></font><code>(0, 1)</code><font style="vertical-align: inherit;"></font><code>(2, 3)</code><font style="vertical-align: inherit;"></font><code>(2n - 2, 2n - 1)</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使每对夫妇并排坐在一起的最小交换次数</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">交换包括选择任意两个人，然后他们站起来交换座位。</font></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong>Input:</strong> row = [0,2,1,3]
<strong>Output:</strong> 1
<strong>Explanation:</strong> We only need to swap the second (row[1]) and third (row[2]) person.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> row = [3,2,0,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> All couples are already seated side by side.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2n == row.length</code></li>
	<li><code>2 &lt;= n &lt;= 30</code></li>
	<li><code>n</code> is even.</li>
	<li><code>0 &lt;= row[i] &lt; 2n</code></li>
	<li>All the elements of <code>row</code> are <strong>unique</strong>.</li>
</ul>
</div>