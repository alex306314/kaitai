<!DOCTYPE html>
<html>
<head>
  <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
  <?php if(isset($jscss)){ echo $jscss; }?>
  <title>shake</title>
</head>
<body>

<div class="pagew">

<div class="page page_join active" id="page_join">
  <div class="content">
    <div class="formw">
      <div class="form_control">
        <input class="ipt_name" placeholder="请输入用户名或昵称" type="text"/>
      </div>
      <div class="form_control">
        <input class="ipt_phone" placeholder="请输入手机号" type="text"/>
      </div>
      <div class="form_control">
        <p class="form_info"></p>
      </div>
      <div class="form_control">
        <button class="btn_join">加入游戏</button>
      </div>
    </div>
  </div>
</div>

<div class="page page_shake" id="page_shake">
  <div class="content">
    <div class="pic_yao"></div>
  </div>
</div>

</div>

</body>
</html>