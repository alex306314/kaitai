<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>


<div class="head">
    <div class="max_width clearfix">
        <div class="site_name">
            <a title="佛山文丰塑料机械有限公司" class="b" href="">佛山文丰塑料机械有限公司</a>
            <div class="s">
                <a target="_blank" href="">干燥机</a>
                <a target="_blank" href="">破碎机</a>
                <a target="_blank" href="">吸料机</a>
                <a target="_blank" href="">模具温控机</a>
                <a target="_blank" href="">冷水机</a>
                <a target="_blank" href="">混色机</a>
                <a target="_blank" href="">搅拌机</a>
                <a target="_blank" href="">冷却水塔</a>
                <a target="_blank" href="">机械手</a>
            </div>
        </div>
        <?php print render($page['header']); ?>
    </div>
</div>
<div class="nav">
    <div class="max_width">
        <ul class="ul1">
            <li class="li1">
                <a class="a1 hover">网站首页</a>
            </li>
            <li class="li1">
                <a class="a1">关于我们</a>
            </li>
            <li class="li1">
                <a class="a1">新闻中心</a>
            </li>
            <li class="li1">
                <a class="a1">产品中心</a>
            </li>
            <li class="li1">
                <a class="a1">在线订购</a>
            </li>
            <li class="li1">
                <a class="a1">联系我们</a>
            </li>
        </ul>
    </div>
</div>

<div class="banner">
    <?php print render($page['banner']); ?>
    <div class="slide myslide"
         data-cycle-fx="fade"
         data-cycle-timeout="5000"
         data-cycle-slides="> a"
         data-cycle-easing="linear"
        >
        <div class="cycle-pager"></div>
        <a href="#" style="background-image:url(images/sample.jpg)"></a>
        <a href="#" style="background-image:url(images/sample2.jpg)"></a>
        <a href="#" style="background-image:url(images/sample.jpg)"></a>
    </div>
</div>

<div class="content">
    <div class="max_width clearfix">

        <?php print render($page['highlighted']); ?>
        <?php print $breadcrumb; ?>
        <a id="main-content"></a>
        <?php print render($title_prefix); ?>
        <?php if ($title): ?>
            <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
        <?php endif; ?>
        <?php print render($title_suffix); ?>
        <?php print $messages; ?>
        <?php print render($tabs); ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?>
            <ul class="action-links"><?php print render($action_links); ?></ul>
        <?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>


        <div class="side">
            <?php print render($page['navigation']); ?>
            <?php
            // Render the sidebars to see if there's anything in them.
            $sidebar_first  = render($page['sidebar_first']);
            $sidebar_second = render($page['sidebar_second']);
            ?>

            <?php if ($sidebar_first || $sidebar_second): ?>
                <aside class="sidebars">
                    <?php print $sidebar_first; ?>
                    <?php print $sidebar_second; ?>
                </aside>
            <?php endif; ?>
        </div>
        http://www.pvc123.com/b-wenfengjixie/
        jquery.malsup.com/cycle2/demo/non-image.php

        <div style="height: 400px;"></div>
    </div>
</div>




<div class="footer">
    <div class="max_width">
        <p>
            <a href="about.php">关于我们</a> |
            <a href="video.php">展示中心</a> |
            <a href="order.php">在线订购</a> |
            <a href="job.php">人力资源</a> |
            <a href="link.php">友情链接</a>
        </p>
        <p>地址：高新技术开发区迎宾道41号  联系电话：400-000-8888</p>
        <p>777房设备有限公司 版权所有 &nbsp;<span class="fonta">Copyright &copy; 2014 All Right Reserve</span>&nbsp;
            <a target="_blank" href="http://www.miibeian.gov.cn">京ICP备09000000号</a>
        </p>
        <div class="clear"></div>
        <?php print render($page['footer']); ?>
    </div>
</div>

<?php print render($page['bottom']); ?>
