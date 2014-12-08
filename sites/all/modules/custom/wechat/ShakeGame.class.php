<?php

class ShakeGame
{
  public $startTimeKey = "shake_game_start_time";
  public $startKey = "shake_game_start";
  public $timeout = 600; //保存时间


  /**
   * 添加玩家
   * @param $name
   * @param $phone
   * @return DatabaseStatementInterface|int
   */
  public function addUser($name, $phone)
  {
    $time = time();
    $sid = db_insert('wechat_shake')
      -> fields(array(
        'name' => $name,
        'phone' => $phone,
        'shake_times' => 0,
        'first_shake_at' => 0,
        'created_at' => $time,
        'updated_at' => $time,
      ))
      -> execute();
    return $sid;
  }

  /**
   * 更新数据
   * @param $sid
   * @param $isFirstShake
   * @return DatabaseStatementInterface
   */
  public function update($sid, $isFirstShake)
  {
    $time = time();
    $dbu = db_update('wechat_shake')
      -> condition('sid', $sid);
    if($isFirstShake==1){
      $dbu = $dbu->fields(array(
        "first_shake_at" => $time,
        'updated_at' => $time,
      ));
    }else{
      $dbu = $dbu-> fields(array(
        'updated_at' => $time,
      ));
    }
    $dbu = $dbu->expression("shake_times", "shake_times + 1");
    $result = $dbu-> execute();
    return $result;
  }

  /*
   * 获取游戏是否已经开始
   */
  public function isStarted()
  {
    $start_time = variable_get($this->startTimeKey, 0);
    if(time() - $start_time < $this->timeout){
      return variable_get($this->startKey, false);
    }
    return false;
  }

  /**
   * 游戏开始
   */
  public function start()
  {
    variable_set($this->startTimeKey, time());
    variable_set($this->startKey, true);
  }

  /**
   * game stop
   */
  public function stop()
  {
    variable_set($this->startKey, false);
  }
}