<div class="slide myslide" 
  data-cycle-fx="fade" 
  data-cycle-timeout="5000"
  data-cycle-slides="> a"
  data-cycle-easing="linear"
  >
  <div class="cycle-pager"></div>
  <?php foreach($images as $i){ ?>
	<a href="<?php echo $i['url'];?>" style="background-image:url(<?php echo $i['img'];?>);"></a>
  <?php } ?>
</div>