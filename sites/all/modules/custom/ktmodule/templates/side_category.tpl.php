<div class="c procatecc clearfix">
  <ul>
    <?php foreach($cats as $k=>$c){ ?>
    <li data-k="<?php echo $k; ?>">
      <?php echo l('-'.$c->name, 'products/c' . $c->tid); ?>
    </li>
    <?php 
    if($k>6) break;
    } ?>
  </ul>
  <div class="search_box">
    <form class="side_form" method="get" action="#">
      <input type="hidden" value="search" name="action">
      <input type="hidden" value="wenfengjixie" name="homepage">
      <div class="s in_search">
        <input type="hidden" value="sell" name="file">
        <input type="text" name="kw" placeholder="站内搜索">
        <span class="c1icon btn_form_search">搜索</span>
      </div>
    </form>
  </div>
</div>