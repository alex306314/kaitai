<?php

function kt_get_news()
{
  return '资讯';
}


/**
 * 获取产品列表
 */
function kt_get_products($a='',$b='', $c='')
{
  $data = $nids = array();
  $page =  isset($_GET['page'])?intval($_GET['page']):1;
  $start = $page;
  $perPage = variable_get('perage',10);

  $query = new EntityFieldQuery();
  $entities = $query->entityCondition('entity_type', 'node')
    ->propertyCondition('type', 'products');

  if($a == 'cat'){  //显示指定 分类的产品列表
    $tid = intval($b);
    echo 1;
  }elseif(intval($a)!=0){ //显示指定id的产品
    $nid = intval($a);
    echo 3;
  }else{  //没有参数则显示所有产品列表
    $query->count = true;
    $total = $query->execute();
    $query->count = false;
    $entities = $query->range($start, $perPage);
    $nodes = $entities->execute();
    foreach ($nodes['node'] as $v) {
      $nids[] = $v->nid;
    }
    $nodesData = node_load_multiple($nids);

    foreach($nodesData as $n){
      $imgItem = field_get_items('node', $n, 'field_image');
      $products[] = array(
        'nid' => $n->nid,
        'title' => $n->title,
        'img' => image_style_url('product_list_thumb162x122',$imgItem[0]['uri']),
        'url' => "node/" . $n->nid,
        );
    }
    pager_default_initialize(300, $perPage);
    $data = array(
      'products' => $products,
      'pager' => theme('pager'),
      );
  }
  
  return theme('product_list', $data);
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