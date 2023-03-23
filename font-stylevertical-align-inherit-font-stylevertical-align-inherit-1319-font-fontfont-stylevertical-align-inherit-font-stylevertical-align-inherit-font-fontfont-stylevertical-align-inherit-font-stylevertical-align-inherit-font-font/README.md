<h2><a href="https://leetcode.com/problems/number-of-operations-to-make-network-connected/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1319 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使網絡連接的操作數</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有編號從</font><font style="vertical-align: inherit;">到</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的計算機</font><font style="vertical-align: inherit;">通過以太網電纜連接</font><font style="vertical-align: inherit;">形成一個網絡，其中代表計算機</font><font style="vertical-align: inherit;">和 之間</font><font style="vertical-align: inherit;">的連接</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">任何計算機都可以通過網絡直接或間接訪問任何其他計算機。</font></font><code>0</code><font style="vertical-align: inherit;"></font><code>n - 1</code><font style="vertical-align: inherit;"></font><code>connections</code><font style="vertical-align: inherit;"></font><code>connections[i] = [a<sub>i</sub>, b<sub>i</sub>]</code><font style="vertical-align: inherit;"></font><code>a<sub>i</sub></code><font style="vertical-align: inherit;"></font><code>b<sub>i</sub></code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您將獲得一個初始計算機網絡</font></font><code>connections</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以在兩台直接連接的計算機之間提取某些電纜，並將它們放置在任何一對斷開連接的計算機之間，使它們直接連接。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要執行此操作的最少次數，以使所有計算機都連接起來</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果不可能，請返回</font></font><code>-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/01/02/sample_1_1677.png" style="width: 500px; height: 148px;">
<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 4, connections = [[0,1],[0,2],[1,2]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 1
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解釋：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移除計算機 1 和 2 之間的電纜並放置在計算機 1 和 3 之間。
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/01/02/sample_2_1677.png" style="width: 500px; height: 129px;">
<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 6，連接 = [[0,1],[0,2],[0,3],[1,2],[1,3]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 2
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 3：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">輸出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -1
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解釋：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">沒有足夠的電纜。
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">約束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= connections.length &lt;= min(n * (n - 1) / 2, 10<sup>5</sup>)</code></li>
	<li><code>connections[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; n</code></li>
	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">沒有重複的連接。</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">沒有兩台計算機通過一根以上的電纜連接。</font></font></li>
</ul>
</div>