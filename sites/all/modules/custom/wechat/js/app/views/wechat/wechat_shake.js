define([
  'jquery',
  'views/wechat/PageJoin',
  'views/wechat/PageShake',
  'views/wechat/PageList',
  'domReady!'
], function($, PageJoin, PageShake, PageList){
  window.wx = window.wx || {};
  wx.sid = 0;    //当前摇奖者ID

  function setPageDimension(){
    var maxWidth = 640;
    var w = $(window).width() > maxWidth ? maxWidth : $(window).width();
    $('.page,.pagew,body').css({
      width: w + "px",
      height: $(window).height() + "px"
    });

  }

  if(!!$(".pageindexbody")[0]){
    wx.pageJoin = new PageJoin();
    wx.pageShake = new PageShake();
    setPageDimension();
    $(window).resize(function(){
      setPageDimension();
    });
  }
  if(!!$(".page_list_body")[0]){
    wx.pageList = new PageList();
  }


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




  //$(".content").append($(window).width());


});