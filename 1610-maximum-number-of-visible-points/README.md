<h2><a href="https://leetcode.com/problems/maximum-number-of-visible-points/">1610. Maximum Number of Visible Points</a></h2><h3>Hard</h3><hr><div><p>You are given an array <code>points</code>, an integer <code>angle</code>, and your <code>location</code>, where <code>location = [pos<sub>x</sub>, pos<sub>y</sub>]</code> and <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> both denote <strong>integral coordinates</strong> on the X-Y plane.</p>

<p>Initially, you are facing directly east from your position. You <strong>cannot move</strong> from your position, but you can <strong>rotate</strong>. In other words, <code>pos<sub>x</sub></code> and <code>pos<sub>y</sub></code> cannot be changed. Your field of view in <strong>degrees</strong> is represented by <code>angle</code>, determining how wide you can see from any given view direction. Let <code>d</code> be the amount in degrees that you rotate counterclockwise. Then, your field of view is the <strong>inclusive</strong> range of angles <code>[d - angle/2, d + angle/2]</code>.</p>

<p style-backup="style-backup: none" def-position="static" style="style-backup: none">
<video autoplay="" controls="" height="360" muted="" style="max-width:100%;height:auto;" width="480" data-fullscreen-container="true" __idm_id__="1204225"><source src="https://assets.leetcode.com/uploads/2020/09/30/angle.mp4" type="video/mp4">Your browser does not support the video tag or this video format.</video>
  <div class="onlineSubWrap" id="onlineSubWrap_1" style="bottom: 10%; left: 0px; right: 0px; -webkit-text-fill-color: rgb(255, 255, 0); font-weight: normal; -webkit-text-stroke-color: rgb(0, 0, 0); font-size: 32px; font-family: Arial, Helvetica, sans-serif;"></div>
  <div class="onlineSubDashboard" id="onlineSubDashboard_1" style="opacity: 1;">
    <input type="file" id="onlineSubLoadBtn_1" accept=".srt" class="onlineSubLoadBtn" style="display: none;">
    <label class="onlineSubLoadLabel" for="onlineSubLoadBtn_1">
      <div></div>
    </label>
    <div class="onlineSubSettings" show="false"></div>
    <div class="onlineSubSettingsWrap" style="display: none;">
      <div>
        <span>Reset position: </span>
        <input class="onlineSubResetPos" type="button" value="reset">
      </div>
      
      <div>
        <span>Color: </span>
        <input class="onlineSubColor" type="color" value="#ffff00">
      </div>

      <div>
        <span>Bold: </span>
        <input class="onlineSubBold" type="checkbox">
      </div>

      <div>
        <span>Stroke: </span>
        <input class="onlineSubStrokeColor" type="color" value="#000000">
      </div>
      
      <div>
        <span>Background color: </span>
        <input class="onlineSubWrapLine" type="color" value="#000000">
      </div>

      <div>
        <span>Background opacity: </span>
        <input class="onlineSubWrapLineOpacity" type="range" min="1" max="100" step="1" value="0">
      </div>
      
      <div>
        <span>Time corection (ms): </span>
        <input class="onlineSubCorOutput" type="number" step="500" value="-1000">
      </div>
      
      <div>
        <span>Size: </span>
        <input class="onlineSubFontSize" type="range" value="32" min="12" max="96" step="1">
      </div>
      
      <div>
        <span>Font family: </span>
        <select class="onlineSubFontFamily"><option value="Arial, Helvetica, sans-serif">Arial</option><option value="&quot;Arial Black&quot;, Gadget, sans-serif">Arial Black</option><option value="Impact, Charcoal, sans-serif">Impact</option><option value="&quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif">Lucida Sans Unicode</option><option value="Tahoma, Geneva, sans-serif">Tahoma</option><option value="&quot;Trebuchet MS&quot;, Helvetica, sans-serif">Trebuchet MS</option><option value="Verdana, Geneva, sans-serif">Verdana</option><option value="Georgia, serif">Georgia</option><option value="&quot;Palatino Linotype&quot;, &quot;Book Antiqua&quot;, Palatino, serif">Palatino Linotype</option><option value="&quot;Times New Roman&quot;, Times, serif">Times New Roman</option><option value="&quot;Courier New&quot;, Courier, monospace">Courier New</option><option value="&quot;Lucida Console&quot;, Monaco, monospace">Lucida Console</option></select>
      </div>
      
      <div>
        <span>Encoding: </span>
        <select class="onlineSubEncoding"><option value="UTF-8">UTF-8</option><option value="IBM866">IBM866</option><option value="ISO-8859-2">ISO-8859-2</option><option value="ISO-8859-3">ISO-8859-3</option><option value="ISO-8859-4">ISO-8859-4</option><option value="ISO-8859-5">ISO-8859-5</option><option value="ISO-8859-6">ISO-8859-6</option><option value="ISO-8859-7">ISO-8859-7</option><option value="ISO-8859-8">ISO-8859-8</option><option value="ISO-8859-8-I">ISO-8859-8-I</option><option value="ISO-8859-10">ISO-8859-10</option><option value="ISO-8859-13">ISO-8859-13</option><option value="ISO-8859-14">ISO-8859-14</option><option value="ISO-8859-15">ISO-8859-15</option><option value="ISO-8859-16">ISO-8859-16</option><option value="KOI8-R">KOI8-R</option><option value="KOI8-U">KOI8-U</option><option value="macintosh">macintosh</option><option value="windows-874">windows-874</option><option value="windows-1250">windows-1250</option><option value="windows-1251">windows-1251</option><option value="windows-1252">windows-1252</option><option value="windows-1253">windows-1253</option><option value="windows-1254">windows-1254</option><option value="windows-1255">windows-1255</option><option value="windows-1256">windows-1256</option><option value="windows-1257">windows-1257</option><option value="windows-1258">windows-1258</option><option value="x-mac-cyrillic">x-mac-cyrillic</option><option value="GBK">GBK</option><option value="gb18030">gb18030</option><option value="Big5">Big5</option><option value="EUC-JP">EUC-JP</option><option value="ISO-2022-JP">ISO-2022-JP</option><option value="Shift_JIS">Shift_JIS</option><option value="EUC-KR">EUC-KR</option><option value="UTF-16BE">UTF-16BE</option><option value="UTF-16LE">UTF-16LE</option></select>
      </div>
      
      <div>
        <span>Save globally: </span>
        <input type="button" value="save" class="onlineSubSaveAsGlobal">
      </div>
    </div>
  <style type="text/css">#onlineSubWrap_1 span{background-color: rgba(0,0,0,0.01);}</style></div>
  
<div style="position: absolute; z-index: 999999; font-size: 12px; padding: 5px 10px; background: rgba(0, 0, 0, 0.4); color: white; top: 0px; left: 0px; transition: all 500ms ease 0s; opacity: 0; border-bottom-right-radius: 5px; display: none; -webkit-font-smoothing: subpixel-antialiased; font-family: &quot;microsoft yahei&quot;, Verdana, Geneva, sans-serif; user-select: none;" class="html_player_enhance_tips">播放速度：2.1</div></p>

<p>You can <strong>see</strong> some set of points if, for each point, the <strong>angle</strong> formed by the point, your position, and the immediate east direction from your position is <strong>in your field of view</strong>.</p>

<p>There can be multiple points at one coordinate. There may be points at your location, and you can always see these points regardless of your rotation. Points do not obstruct your vision to other points.</p>

<p>Return <em>the maximum number of points you can see</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/30/89a07e9b-00ab-4967-976a-c723b2aa8656.png" style="width: 400px; height: 300px;">
<pre><strong>Input:</strong> points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The shaded region represents your field of view. All points can be made visible in your field of view, including [3,3] even though [2,2] is in front and in the same line of sight.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> points = [[2,1],[2,2],[3,4],[1,1]], angle = 90, location = [1,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> All points can be made visible in your field of view, including the one at your location.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/30/5010bfd3-86e6-465f-ac64-e9df941d2e49.png" style="width: 690px; height: 348px;">
<pre><strong>Input:</strong> points = [[1,0],[2,1]], angle = 13, location = [1,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> You can only see one of the two points, as shown above.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= points.length &lt;= 10<sup>5</sup></code></li>
	<li><code>points[i].length == 2</code></li>
	<li><code>location.length == 2</code></li>
	<li><code>0 &lt;= angle &lt; 360</code></li>
	<li><code>0 &lt;= pos<sub>x</sub>, pos<sub>y</sub>, x<sub>i</sub>, y<sub>i</sub> &lt;= 100</code></li>
</ul>
</div>