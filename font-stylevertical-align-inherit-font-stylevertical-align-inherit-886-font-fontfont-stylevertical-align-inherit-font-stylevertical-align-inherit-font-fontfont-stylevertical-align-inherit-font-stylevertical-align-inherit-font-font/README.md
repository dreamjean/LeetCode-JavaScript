<h2><a href="https://leetcode.com/problems/possible-bipartition/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">886 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能的二分法</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们想将一组</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人（标记为 from </font></font><code>1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">to ）分成</font><strong><font style="vertical-align: inherit;">任意大小</font></strong></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的两组</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">每个人都可能不喜欢其他人，他们不应该进入同一个群体。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定整数</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和数组</font></font><code>dislikes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">where</font><font style="vertical-align: inherit;">表示被标记的人</font><font style="vertical-align: inherit;">不喜欢被标记的人，</font><em><font style="vertical-align: inherit;">如果可以通过这种方式将每个人分成两组</font></em><font style="vertical-align: inherit;">，则返回</font><font style="vertical-align: inherit;">。</font></font><code>dislikes[i] = [a<sub>i</sub>, b<sub>i</sub>]</code><font style="vertical-align: inherit;"></font><code>a<sub>i</sub></code><font style="vertical-align: inherit;"></font><code>b<sub>i</sub></code><font style="vertical-align: inherit;"></font><code>true</code> <em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 4, dislikes = [[1,2],[1,3],[2,4]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> true
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> group1 [1,4] 和 group2 [2,3]。
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong>Input:</strong> n = 3, dislikes = [[1,2],[1,3],[2,3]]
<strong>Output:</strong> false
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2000</code></li>
	<li><code>0 &lt;= dislikes.length &lt;= 10<sup>4</sup></code></li>
	<li><code>dislikes[i].length == 2</code></li>
	<li><code>1 &lt;= dislikes[i][j] &lt;= n</code></li>
	<li><code>a<sub>i</sub> &lt; b<sub>i</sub></code></li>
	<li>All the pairs of <code>dislikes</code> are <strong>unique</strong>.</li>
</ul>
</div>