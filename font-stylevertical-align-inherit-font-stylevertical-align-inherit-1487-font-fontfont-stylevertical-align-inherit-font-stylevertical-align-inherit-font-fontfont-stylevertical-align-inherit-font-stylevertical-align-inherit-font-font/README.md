<h2><a href="https://leetcode.com/problems/making-file-names-unique/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1487 </font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使文件名唯一</font></font></a></h2><h3>Medium</h3><hr><div><p><font style="vertical-align: inherit;"></font><code>names</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定一个大小为 的</font><font style="vertical-align: inherit;">字符串数组</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将在文件系统中</font><font style="vertical-align: inherit;">创建文件夹</font><font style="vertical-align: inherit;">，此时</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将创建一个名为 的文件夹</font><font style="vertical-align: inherit;">。</font></font><code>i<sup>th</sup></code><font style="vertical-align: inherit;"></font><code>names[i]</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于两个文件</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重名，如果你输入的文件夹名是以前使用过的，系统会在其名称后添加一个后缀，形式为 ，</font></font><code>(k)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中，</font></font><code>k</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">使得到的名称保持唯一性的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最小正整数。</font></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个长度为字符串的数组</font></font></em><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中</font></font><code>ans[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是系统</font><font style="vertical-align: inherit;">在创建文件夹时分配给文件夹的实际名称。</font></font><code>i<sup>th</sup></code><font style="vertical-align: inherit;"></font></p>

<p>&nbsp;</p>
<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 1：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> names = ["pes","fifa","gta","pes(2019)"]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ["pes","fifa","gta","pes(2019)"]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们看看文件系统如何创建文件夹名称：</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
"pes" --&gt; 之前没有赋值，仍然是 "pes"</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
"fifa" --&gt; 之前没有赋值，仍然是 "fifa"</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
"gta" --&gt; 之前没有分配，仍然是 "gta"</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
"pes(2019)" --&gt; 之前没有赋值，仍然是 "pes(2019)"</font></font><font></font>
</pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 2：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> names = ["gta","gta(1)","gta","avalon"]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ["gta","gta(1)","gta(2)","avalon"]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们看看文件系统如何创建文件夹名称：</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
"gta" --&gt; 之前没有分配，仍然是 "gta"</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
"gta(1)" --&gt; 之前没有分配，仍然是 "gta(1)"</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
"gta" --&gt; 这个名字是保留的，系统加上 (k)，因为 "gta(1)" 也是保留的，系统把 k = 2。它变成了 "gta(2)"</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
"avalon" --&gt; 之前没有赋值，仍然是 "avalon"</font></font><font></font>
</pre>

<p><strong class="example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例 3：</font></font></strong></p>

<pre><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> names = ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"] 输出：["onepiece","onepiece(1)",
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">"</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> onepiece (2)","onepiece(3)","onepiece(4)"]
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一个文件夹创建时，最小的正有效k为4，成为"onepiece(4)"。
</font></font></pre>

<p>&nbsp;</p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束：</font></font></strong></p>

<ul>
	<li><code>1 &lt;= names.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= names[i].length &lt;= 20</code></li>
	<li><code>names[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由小写英文字母、数字和/或圆括号组成。</font></font></li>
</ul>
</div>