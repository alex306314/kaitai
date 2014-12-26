<?php
/**
 * @file
 * Override of theme_preprocess_...
 */
/**
 * Override or insert variables into the node template.
 *
 * @param array $vars
 *   An array of variables to pass to the theme template.
 */
function tb_blog_preprocess_node(&$vars) {
  if ($vars['type'] == 'blog') {
    $month = array(
      1 => "一月",
      2 => "二月",
      3 => "三月",
      4 => "四月",
      5 => "五月",
      6 => "六月",
      7 => "七月",
      8 => "八月",
      9 => "九月",
      10 => "十月",
      11 => "十一月",
      12 => "十二月",
    );
    $vars['blog_created_day'] = date('j', $vars['created']);
    $vars['blog_created_month'] =$month[date('n', $vars['created'])];
    //添加博客分类
    $blog_type = $vars['content']['field_tags'][0]['#title'];
    $blog_type_href = $vars['content']['field_tags'][0]['#href'];
    $vars['content']['links'][] = array(
      "#links" => array(
        'blog_type' => array(
          'title' => "分类：" . $blog_type,
          'href' => $blog_type_href,
          'attributes' => array(
            'title' => "博客分类"
          ),
        ),
      ),
    );
//    echo "<pre>";
//    //print_r($vars['content']['field_tags']);
//    echo "<br>======================================<br>";
//    var_dump($vars['content']['links']['blog']);
//    echo "</pre>";
}
}
