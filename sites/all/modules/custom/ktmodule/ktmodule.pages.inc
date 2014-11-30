<?php

function kt_get_news()
{
  return '资讯';
}


/**
 * 获取产品列表
 *
 * 不指定参数 显示所有产品列表页
 * 第一个参数为cat时 显示参数$b指定的tid分类产品列表
 *
 */
function kt_get_products($a='')
{

  //var_dump($a);exit;
  $type = $a=='' ? -1 : substr($a, 0, 1);
  $id = substr($a,1);
  $page =  isset($_GET['page'])?intval($_GET['page']):1;
  $perPage = variable_get('perage',10);

  $data = $nids = array();
  $start = $page;


  if($type == 'n'){ //显示指定产品
    $node = node_load($id);
    drupal_set_title($node->title);
   // echo "<pre>";
   // var_dump($node);exit;


    $data = array(
      'nid' => $id,
    );
    return theme('product_detail', $data);
  }else{ //显示分类列表
    $query = new EntityFieldQuery();
    $query->entityCondition('entity_type', 'node')
      ->propertyCondition('type', 'products');
    if($type=='c'){ //有分类ID时
      $query->fieldCondition('field_tags', 'tid', $id, '=');
    }
    $query->count = true;
    $total = $query->execute();
    $query->count = false;
    $query->range($start, $perPage);
    $nodes = $query->execute();
    if(!empty($nodes)) {
      $nids = array_keys($nodes['node']);
      $nodesData = node_load_multiple($nids);

      foreach ($nodesData as $n) {
        $imgItem = field_get_items('node', $n, 'field_image');
        $products[] = array(
          'nid' => $n->nid,
          'title' => $n->title,
          'img' => image_style_url('product_list_thumb162x122', $imgItem[0]['uri']),
          'url' => url("products/n" . $n->nid),
        );
      }
      pager_default_initialize(300, $perPage);
      $data = array(
        'products' => $products,
        'pager' => theme('pager'),
      );
    }else{
      $data = array(
        'products' => array(),
        'msg' => "当前还没有产品",
      );
    }
    return theme('product_list', $data);
  }

}

function kt_get_products_by_tid($id, $page)
{

}

/**
 * 
 */
function kt_get_projects($id=0)
{
  var_dump($id);exit;
  return "项目案例";
}

function kt_get_knowledges()
{
  return "知识库";
}

/**
 * 关于我们
 */
function kt_about_us()
{
  $data = array();
  return "关于我们";
}