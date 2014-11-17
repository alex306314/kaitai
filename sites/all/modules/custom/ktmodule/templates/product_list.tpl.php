<div class="c clearfix">
<div class="tjslide clearfix">

  <?php foreach($products as $p){ ?>
  <div class="item">
    <a class="a1" href="<?php echo $p['url']; ?>">
      <span class="imgw"><img alt="" src="<?php echo $p['img']; ?>"></span>
      <span class="imgt"><?php echo $p['title']; ?></span>
    </a>
  </div>
  <?php } ?>

</div>
</div>
<div class="pagerw">
  <?php echo $pager; ?>
</div>
