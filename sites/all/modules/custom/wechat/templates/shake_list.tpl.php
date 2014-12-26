<!DOCTYPE html>
<html>
<head>
  <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
  <meta content="user-scalable=no,height=device-height,width =device-width," name="viewport">
  <meta name="apple-touch-fullscreen" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <?php if(isset($jscss)){ echo $jscss; }?>
  <title>摇一摇排名</title>
</head>
<body class="page_list_body">

<div class="max_width">
  <div class="addinfo"><span class="ti">火拼摇一摇</span> <span class="tir">添加 <span class="nam">天蓝创想</span>
    公众账号  <span class="sm">发送 <span class="en">yyy</span> 即可参与</span></span></div>
  <div class="countdownw hide">
    <div class="count_down">
      <div class="bgtxt count_start">开始</div>
      <div class="num numanimate">1</div>
    </div>
    <img class="twocode" src="<?php echo $module_url ?>/images/tj.jpg">
  </div>

  <ul class="yylist ">
      <?php for($i=0;$i<8;$i++){ ?>
      <li>
        <span class="thr gold"></span>
        <span class="yname">name</span>
        <span class="progress"></span>
      </li>
      <?php } ?>
  </ul>

</div>

</body>
</html>