<?php

/**
 * 获取access token
 * @return int|string
 */
function wxGetAccessToken()
{
  $saveTime = "wx_save_time";
  $saveToken = "wx_access_token";
  $maxExpire = MAX_EXPIER; //最大缓存时间 7200秒
  $wxSaveTime = intval(variable_get($saveTime));
  if((time() - $wxSaveTime) < $maxExpire){
    return intval(variable_get($saveToken));
  }else{  //token过期重新获取
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=". APPID ."&secret=". APPSECRET;
    $data = file_get_contents($url);
    if($data){
      $token = 3;
      variable_set($saveTime,time());
      variable_set($saveToken, $token);
    }
    echo $url;
    return $data;
  }
}