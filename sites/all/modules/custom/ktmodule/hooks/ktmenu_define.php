<?php
$item = array();
$items['news'] = array(
  'title' => '企业资讯',
  'page callback' => 'kt_get_news',
  'page arguments' => array(2),
  'access arguments' => array('access content'),
  'type' => MENU_NORMAL_ITEM,
  'menu_name' => 'main-menu',
  'weight' => 1,
  'file' => 'ktmodule.pages.inc',
);

$items['products'] = array(
  'title' => '供应产品',
  'page callback' => 'kt_get_products',
  'access arguments' => array('access content'),
  'type' => MENU_NORMAL_ITEM,
  'menu_name' => 'main-menu',
  'weight' => 2,
  'file' => 'ktmodule.pages.inc',
);

$items['products/%'] = array(
  'title' => '供应产品',
  'page callback' => 'kt_get_products',
  'page arguments' => array(1),
  'access arguments' => array('access content'),
  'type' => MENU_LOCAL_TASK,
  'file' => 'ktmodule.pages.inc',
);





$items['projects'] = array(
  'title' => '项目案例',
  'page callback' => 'kt_get_projects',
  'page arguments' => array(1),
  'access arguments' => array('access content'),
  'type' => MENU_NORMAL_ITEM,
  'menu_name' => 'main-menu',
  'weight' => 3,
  'file' => 'ktmodule.pages.inc',
);




$items['knowledges'] = array(
  'title' => '知识库',
  'page callback' => 'kt_get_knowledges',
  'page arguments' => array(2),
  'access arguments' => array('access content'),
  'type' => MENU_NORMAL_ITEM,
  'menu_name' => 'main-menu',
  'weight' => 4,
  'file' => 'ktmodule.pages.inc',
);
$items['aboutus'] = array(
  'title' => '关于我们',
  'page callback' => 'kt_about_us',
  'access arguments' => array('access content'),
  'type' => MENU_NORMAL_ITEM,
  'menu_name' => 'main-menu',
  'weight' => 10,
  'file' => 'ktmodule.pages.inc',
  );
$items['test'] = array(
  'title' => '关于我们',
  'page callback' => 'kttesttest',
  'access arguments' => array('access content'),
  'type' => MENU_CALLBACK,

);
return $items;