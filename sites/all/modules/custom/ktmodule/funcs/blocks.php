<?php

/**
 * 获取banner图片信息
 * @return array
 */
function ktGetBannerData()
{
    //echo "<pre>";
    $query = db_select('{node}','n');
    $query->leftJoin('{field_data_field_image}', 'i', 'i.entity_id=n.nid');
    $query->leftJoin('{field_data_field_url_to}', 'url', 'url.entity_id=n.nid');
    $query->leftJoin('{file_managed}', 'f', 'f.fid=i.field_image_fid');
    $query->fields('i');
    $query->fields('n');
    $query->fields('url');
    $query->fields('f');
    $query->condition('n.type','front_slide_banner', '=');
    $query->range(0,10);
    $data = $query->execute();
    // ->fetchAssoc();
    $images = array();
    foreach($data as $d){
        //var_dump($d);
        $images[] = array(
            'nid' => $d->nid,
            'title' => $d->title,
            'img' => file_create_url($d->uri),
            'url' => isset($d->field_url_to_value)?$d->field_url_to_value:'#',
        );
    };
    //exit;
    //$files = file_load_multiple($ids);
    //var_dump($images);exit;
    return $images;
}