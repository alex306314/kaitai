<?php

/**
 * auto reply message
 */
function wechat_main_page(){
  $weObj = _wechat_init_obj();
  $weObj->valid();
  $type = $weObj->getRev()->getRevType();
  module_invoke_all('wechat_message', $weObj);
  module_invoke_all('wechat_message_alter', $weObj);
  if(!is_array($weObj->Message(''))){ // add default option
    $type = $weObj->getRev()->getRevType();
    switch($type) {
  	  case Wechat::MSGTYPE_EVENT:
  	    $event = $weObj->getRevEvent();
        if(!$event){
          break;
        }
  	    else if($event['event']=='subscribe'){
  	      $weObj->text('my test content');
  	    }
        else if($event['event']=='CLICK'){
          $message = _wechat_menu_default_message($event);
          $message && $weObj->text($message);
        }
  		  break;
    }
  }
  if(!is_array($weObj->Message(''))){
    //$weObj->text(variable_get("wechat_default_message", "test content2"));
    $weObj->text("test content 2");
  }
  $weObj->reply();
  exit;
}

function wechat_auth(){
  global $user;
  $weObj = _wechat_init_obj();
  $state = isset($_GET['state']) ? $_GET['state'] : 0;
  $onerror = isset($_GET['onerror']) ? $_GET['onerror'] : '';
  $destination = isset($_GET['destination']) ? $_GET['destination'] : '';
  $code = isset($_GET['code']) ? $_GET['code'] : '';
  if($user->uid){
    drupal_goto($destination);
  }
  if((!$state) || (!$code)){ // error
    drupal_goto($onerror);
  }

  $accessData = $weObj->getOauthAccessToken();
  if(empty($accessData)){
    drupal_goto($onerror);
  }
  // check if already connectted
  if($curuser = wechat_token_get_user($accessData['openid'])){
    _wechat_user_login($curuser->uid);
    drupal_goto($destination);
  }
  $user_name = 'wechat_'.substr($accessData['openid'], 0, 15);
  while(user_load_by_name($user_name)){
    $user_name = $user_name.rand(0, 100);
  }
  $new_user = array(
    'name' => $user_name,
    'pass' => user_password(),
    'mail' => $user_name.'@'.$_SERVER['SERVER_NAME'],
    'init' => $user_name.'@'.$_SERVER['SERVER_NAME'],
    'status' => 1,
  );
  // $account returns user object
  $account = user_save(null, $new_user);
  if(!$account){
    drupal_goto($onerror);
  }
  _wechat_user_login($account->uid);
  $wechat_user = array(
  	'uid' => $user->uid,
  	'openid' => $user_info['openid'],
    'extend' => array(),
  );
  if($state == 2){
  	$user_info = $weObj->getOauthUserinfo($accessData['access_token'], $accessData['openid']);
  	if(!empty($user_info)){
  		module_invoke_all('wechat_userinfo', $user_info);
  		$wechat_user['nickname'] = $user_info['nickname'];
  		$wechat_user['sex'] = $user_info['sex'];
  		$wechat_user['province'] = $user_info['province'];
  		$wechat_user['city'] = $user_info['city'];
  		$wechat_user['country'] = $user_info['country'];
  		$wechat_user['headimgurl'] = $user_info['headimgurl'];
  	}
  }
  if(!drupal_write_record('wechat_user', $wechat_user)){
    drupal_goto($onerror);
  }

  drupal_goto($destination);
}


function _wechat_menu_default_message($event){
  // get all click menu key
  $key = isset($event['key']) ? $event['key'] : '';
  if(!$key){
    return '';
  }
  $menu_tree = menu_build_tree('wechat', array('max_depth'=>2));
  foreach($menu_tree as $val){
    if($val['link']['hidden']){
      continue;
    }
    if(!empty($val['below'])){
      foreach($val['below'] as $subval){
        if($subval['link']['hidden']){
          continue;
        }
        if($subval['link']['options']['attributes']['wechat_key'] == $key){
          return $subval['link']['options']['attributes']['wechat_default_message'];
        }
      }
    }
    else if($val['link']['options']['attributes']['wechat_key'] == $key){
      return $val['link']['options']['attributes']['wechat_default_message'];
    }
  }
  return '';
}

function wechat_get_access_token1(){
  echo _wechat_get_access_token();
  exit;
}

function wechat_get_qr($scene_id){
  echo "<pre>";
  echo $scene_id. "<br>";
  $weObj = _wechat_init_obj();
  $data = $weObj->getQRCode($scene_id);
  var_dump($data);exit;
  //echo $weObj->getQRUrl();
}

function wechat_shake_index(){

  global $base_url;
  $jscss = '<link rel="stylesheet" href="'. wechat_attach_css('common') .'">';
  $jscss .= '<link rel="stylesheet" href="'. wechat_attach_css('wechat') .'">';
  $jscss .= '<script>window.lib_url="'. $base_url."/".drupal_get_path('module','wechat')."/js/lib/" .'"</script>';
  $jscss .= '<script data-main="'. wechat_attach_js('wechat_shake') .'" src="'
    . wechat_attach_js('require', 'js/lib/requirejs') .'"></script>';


  $data = array(
    'jscss' => $jscss,
  );
  return theme('shake_index',$data);
}

/**
 *
 */
function wechat_shake_handle()
{
  var_dump($_REQUEST);
}

/**
 * 获取js路径
 * @param $file
 *
 * @param string $dir
 * @return string
 */
function wechat_attach_js($file, $dir='js')
{
  global $base_url;
  return $base_url.'/'.ctools_attach_js($file, 'wechat', $dir);
}
function wechat_attach_css($file, $dir='css')
{
  global $base_url;
  return $base_url.'/'.ctools_attach_css($file, 'wechat', $dir);
}
