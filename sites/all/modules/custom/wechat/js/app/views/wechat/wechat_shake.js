define([
  'jquery',
  'views/wechat/PageJoin',
  'views/wechat/PageShake',
  'domReady!'
], function($, PageJoin, PageShake){
  window.wx = window.wx || {};
  wx.firstShake = 1;

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
    $('.page').css({
      width: ($(window).width() > maxWidth ? maxWidth : $(window).width()) + "px",
      height: $(window).height() + "px"
    });
  }
  setPageDimension();
  $(window).resize(function(){
    setPageDimension();
  });

});