define([
  'jquery',
  'backbone',
  'underscore',
  'ejs'
], function ($, Backbone, _, EJS) {
  return Backbone.View.extend({
    el: "#page_shake",
    firstShake: 1, //第一次摇
    // 首先，定义一个摇动的阀值
    SHAKE_THRESHOLD: 3000,
    // 定义一个变量保存上次更新的时间
    last_update: 0,
    // 紧接着定义x、y、z记录三个轴的数据以及上一次出发的时间
    x: 0,
    y: 0,
    z: 0,
    last_x: 0,
    last_y: 0,
    last_z: 0,
    // 为了增加这个例子的一点无聊趣味性，增加一个计数器
    count: 0,
    initialize: function () {
      _.bindAll(this, "show", "shakeInit", "deviceMotionHandler", "shakeHandle", "showInfo");
    },
    events: {},
    render: function () {

    },
    show: function () {
      var self = this;
      var $oldPage = $(".page.active");
      var $newPage = this.$el;
      $newPage.css({
        marginLeft: $oldPage.width() + "px"
      }).addClass("active").animate({
        marginLeft: 0
      }, 400, "linear");

      $oldPage.animate({
        marginLeft: "-" + $oldPage.width() + "px"
      }, 400, "linear", function () {
        $oldPage.removeClass("active");
      });
      this.shakeInit();
    },
    shakeInit: function () {
      if (window.DeviceMotionEvent) {
        // 移动浏览器支持运动传感事件
        window.addEventListener('devicemotion', this.deviceMotionHandler, false);
      } else {
        // 移动浏览器不支持运动传感事件
        $("#yaoyiyaono").show();
      }
    },
    deviceMotionHandler: function (eventData) {
      // 获取含重力的加速度
      var acceleration = eventData.accelerationIncludingGravity;

      // 获取当前时间
      var curTime = new Date().getTime();
      var diffTime = curTime - this.last_update;
      // 固定时间段
      if (diffTime > 100) {
        this.last_update = curTime;

        this.x = acceleration.x;
        this.y = acceleration.y;
        this.z = acceleration.z;

        var speed = Math.abs(this.x + this.y + this.z - this.last_x - this.last_y - this.last_z) / diffTime * 10000;

        if (speed > this.SHAKE_THRESHOLD) {
          this.shakeHandle();
          this.count++;
          //$("#yaoyiyaoyes").hide();
          //$("#yaoyiyaoresult").show();
          //$("#yaoyiyaoresult").html("摇你妹!第" + count + "个了！");
        }

        this.last_x = this.x;
        this.last_y = this.y;
        this.last_z = this.z;

      }
    },
    shakeHandle: function(){
      var self = this;
      var data = {
        action: "userShaked",
        firstShake : 0,
        sid: wx.sid
      };
      if(this.firstShake){
        data.firstShake = 1;
        this.firstShake = 0;
      }
      wx.ajax({
        data: data,
        success: function(d){
          //console.log(d);
          if(d.state){
            //console.log(data);
            self.showInfo(d.msg);
          }else{
            self.showInfo(d.msg);
          }
        }
      });
    },
    //显示提示信息
    showInfo: function(info){
      $(".infordiv").remove();
      var html = '<div class="infordiv" style="margin:20px;height: 30px;position: absolute, bottom:0;color:#2c2c2c;' +
        'background: #114C01;line-height:30px;text-align:center;color:white;border-radius:3px;box-shadow:2px 3px 3px #000">';
      html += info;
      html += '</div>';
      $(".pagew .page").append(html);
      $(".infordiv").stop(true,false).animate({
        bottom: "50px"
      },300, "linear", function(){
        setTimeout(function(){
          $(".infordiv").remove();
        }, 400);
      })
    }

  });
});