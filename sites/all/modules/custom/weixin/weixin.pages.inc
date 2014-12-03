<?php

/**
 * 微信测试首页
 * @return string
 */
function weixin_index()
{

  $weChat = new WeChat1();
  $weChat->valid();

  drupal_set_title("微信测试页");
  return theme('weixin', array());
}

/**
 * 生成 access token
 */
function weixin_get_access_token()
{
  echo wxGetAccessToken();
  exit;
}