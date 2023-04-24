<h2><a href="https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/">762. Prime Number of Set Bits in Binary Representation</a></h2><h3>Easy</h3><hr><div class="translated"><p class="translated">Given two integers <code>left</code> and <code>right</code>, return <em>the <strong>count</strong> of numbers in the <strong>inclusive</strong> range </em><code>[left, right]</code><em> having a <strong>prime number of set bits</strong> in their binary representation</em>.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">给定两个整数 left 和 right，返回包含范围 [left, right] 的数字的计数，这些数字在其二进制表示中具有素数的集合位。</p>

<p class="translated">Recall that the <strong>number of set bits</strong> an integer has is the number of <code>1</code>'s present when written in binary.</p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">回想一下，当以二进制形式写入时，整数的设置位数是 1 的数量。</p>

<ul class="translated">
	<li class="translated">For example, <code>21</code> written in binary is <code>10101</code>, which has <code>3</code> set bits.</li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">比如21用二进制写成10101，有3个置位。</li>
</ul>

<p class="translated">&nbsp;</p>
<p class="translated"><strong class="example">Example 1:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 1：</p>

<pre><strong>Input:</strong> left = 6, right = 10
<strong>Output:</strong> 4
<strong>Explanation:</strong>
6  -&gt; 110 (2 set bits, 2 is prime)
7  -&gt; 111 (3 set bits, 3 is prime)
8  -&gt; 1000 (1 set bit, 1 is not prime)
9  -&gt; 1001 (2 set bits, 2 is prime)
10 -&gt; 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.
</pre>

<p class="translated"><strong class="example">Example 2:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">示例 2：</p>

<pre><strong>Input:</strong> left = 10, right = 15
<strong>Output:</strong> 5
<strong>Explanation:</strong>
10 -&gt; 1010 (2 set bits, 2 is prime)
11 -&gt; 1011 (3 set bits, 3 is prime)
12 -&gt; 1100 (2 set bits, 2 is prime)
13 -&gt; 1101 (3 set bits, 3 is prime)
14 -&gt; 1110 (3 set bits, 3 is prime)
15 -&gt; 1111 (4 set bits, 4 is not prime)
5 numbers have a prime number of set bits.
</pre>

<p class="translated">&nbsp;</p>
<p class="translated"><strong>Constraints:</strong></p><p class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">约束：</p>

<ul class="translated">
	<li class="translated"><code>1 &lt;= left &lt;= right &lt;= 10<sup>6</sup></code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">1 &lt;= 左 &lt;= 右 &lt;= 106</li>
	<li class="translated"><code>0 &lt;= right - left &lt;= 10<sup>4</sup></code></li><li class="translated" style="color: red; padding: 0px 4px; font-size: 14px;">0 &lt;= 右 - 左 &lt;= 104</li>
</ul>
</div>