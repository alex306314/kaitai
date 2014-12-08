define([
  'jquery',
  'views/wechat/PageJoin',
  'views/wechat/PageShake',
  'domReady!'
], function($, PageJoin, PageShake){
  window.wx = window.wx || {};
  wx.sid = 0;    //当前摇奖者ID

  wx.pageJoin = new PageJoin();
  wx.pageShake = new PageShake();


  wx.ajax = function (options){
    var defaultOptions = {
      url: window.handle_url,
      type: "post",
      data: {},
      dataType: "json",
      success: function(data){

      }
    };
    $.extend(defaultOptions, options);
    $.ajax(defaultOptions);
  };



  function setPageDimension(){
    var maxWidth = 640;
    var w = $(window).width() > maxWidth ? maxWidth : $(window).width();
    $('.page').css({
      width: w + "px",
      height: $(window).height() + "px"
    });
    $('.pagew').css({
      width: w + "px",
      height: $(window).height() + "px"
    });
  }
  setPageDimension();
  $(window).resize(function(){
    setPageDimension();
  });

});