define([
  'jquery',
  'views/wechat/PageJoin',
  'views/wechat/PageShake',
  'domReady!'
], function($, PageJoin, PageShake){
  window.wx = window.wx || {};

  wx.pageJoin = new PageJoin();
  wx.pageShake = new PageShake();


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