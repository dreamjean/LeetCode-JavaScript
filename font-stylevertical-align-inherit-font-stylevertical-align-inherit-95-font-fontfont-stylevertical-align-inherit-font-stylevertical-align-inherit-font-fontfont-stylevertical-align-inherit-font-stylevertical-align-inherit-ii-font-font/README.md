<h2><a href="https://leetcode.com/problems/unique-binary-search-trees-ii/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">95 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一二叉搜索树 II</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定一个整数</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有结构上唯一的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BST</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（二叉搜索树），它恰好具有从</font></font></em><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">到</font></em></font><code>n</code><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的唯一值的节点</font></font></em> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><strong><font style="vertical-align: inherit;">按任意顺序</font></strong><font style="vertical-align: inherit;">返回答案</font><font style="vertical-align: inherit;">。</font></font><code>1</code> <em><font style="vertical-align: inherit;"></font></em> <code>n</code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg" style="width: 600px; height: 148px;">
<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 3
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2], [3,2,null,1]]
</font></font></pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> n = 1
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [[1]]
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 8</code></li>
</ul>
</div>