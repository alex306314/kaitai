<?php

/**
 * 获取banner图片信息
 * @return array
 */
function ktGetBannerData()
{
  //echo "<pre>";
  $nids = array();
  $images = array();

  $query = new EntityFieldQuery();
  $entities = $query->entityCondition('entity_type', 'node')
    ->propertyCondition('type', 'front_slide_banner');
  $nodes = $entities->execute();
//  foreach($nodes['node'] as $k=>$v){
//    $nids[] = $v->nid;
//  }
  $nids = array_keys($nodes['node']);

  $nodesData = node_load_multiple($nids);
  foreach($nodesData as $n){
    $imgItem = field_get_items('node',$n,'field_image');
    $urlItem = field_get_items('node', $n, 'field_url_to');
    $bodyItem = field_get_items('node', $n, 'body');

    $images[] = array(
      'nid' => $n->nid,
      'title' => $n->title,
      'img' => file_create_url($imgItem[0]['uri']),
      'url' =>$urlItem[0]['safe_value'],
      'des' => $bodyItem[0]['safe_value'],
    );
  }
  //exit;
  return $images;
}

/**
 * 获取产品分类列表
 */
function kt_side_category_menu()
{
  $cats = array();
  //echo "<pre>";
  $tax = taxonomy_get_tree(2,0,2);

  //var_dump($tax);exit;
  return array(
    'cats' => $tax,
    );
}


