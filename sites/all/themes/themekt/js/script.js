/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.

  }
};
  $(function(){
    $(".myslide").cycle();
    //畅销产品块
    $(".sidchxicc li").hover(function(){
      $(".sidchxicc li").removeClass("active");
      $(this).addClass("active");
    },function(){

    });


    function productslide(){
      var slideshows = $('.cycle-slideshow1').on('cycle-next cycle-prev', function(e, opts) {
        // advance the other slideshow
        slideshows.not(this).cycle('goto', opts.currSlide);
      });

      $('#cycle-2 .cycle-slide').click(function(){
        var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
      });
    }
    //产品详情图片
    if(!!$(".prodetailb")[0]){
      productslide();
      new ImageZoomView($(".proslide"),{});

    }


  });//document ready

  var ImageZoomView = function($s,options){
    this.$s = $s;
    this.scale = 4;
    this.moveHover = ".movehover"; //半透明跟随鼠标层
    this.hoverBig = ".hoverbig";   //图片放大区显示层
    this.bigWidth = 350;
    this.bigHeight = 260;
    this.hoverWidth = this.bigWidth/this.scale;
    this.hoverHeight = this.bigHeight/this.scale;
    this.imageWidth = 260;
    this.imageHeight = 196;
    this.img = ".cycle-slide-active img";
    this.big = '.hoverbig';
    this.bigImg = '.hoverbig img';

    this.initialize(options);
  };
  ImageZoomView.prototype = {
    initialize: function(options){
      var self = this;
      $.extend(this, options);
      self.generateDiv();

      self.bindEvents();
    },
    bindEvents: function(){
      var self = this;
      self.$s.hover(function(e){  //鼠标移入移出图片

        var imgSrc = self.$s.find(self.img).attr('src');
        self.setBigImg({src: imgSrc});

        $(this).addClass("hover");
      },function(){
        $(this).removeClass("hover");
      });

      self.$s.mousemove(function(e){
        var left = e.pageX - self.$s.offset().left - self.hoverWidth/2;
        var top = e.pageY - self.$s.offset().top - self.hoverHeight/2;
        left = left <= 0 ? 0 : left;
        top = top <= 0 ? 0 : top;
        var mleft = self.imageWidth - self.hoverWidth;
        var mtop = self.imageHeight - self.hoverHeight;
        var left1 = left > mleft ? mleft-2 : left;
        var top1 = top > mtop ? mtop-2 : top;
        self.setHoverCss({
          left: left1 + "px",
          top: top1 + "px"
        });
        //设置放大后图片的位置
        var b = self.bigWidth*self.scale/self.imageWidth;
        self.setBigCss({
          left: "-"+ (left*b-1) + "px",
          top: "-" + (top *b-1) + "px"
        });

      });

    },
    generateDiv: function(){
      var self = this;
      var hstr = '<div class="movehover"></div><div class="hoverbig"><img src="" alt=""/></div>';
      self.$s.append(hstr);
      self.setHoverCss();
      self.setBigCss();
    },
    setHoverCss: function(options){
      var self = this;
      var o = {
        left:0,
        top:0,
        width:self.hoverWidth+"px",
        height:self.hoverHeight+"px"
      };
      $.extend(o, options);
      self.$s.find(self.moveHover).css(o);
    },
    //设置放大图片属性
    setBigImg: function(options){
      var self = this;
      var o = {
        src: '',
        alt: ''
      };
      $.extend(o, options);
      self.$s.find(self.bigImg).attr(o);
    },
    setBigCss: function(options){
      var self = this;
      var o = {
        left:0,
        top:0,
        width:self.bigWidth*self.scale+"px",
        height:self.bigHeight*self.scale+"px"
      };
      $.extend(o, options);
      self.$s.find(self.bigImg).css(o);
    }
  };


})(jQuery, Drupal, this, this.document);
