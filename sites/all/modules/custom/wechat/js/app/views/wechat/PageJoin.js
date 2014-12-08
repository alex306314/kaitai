define([
  'jquery',
  'backbone',
  'underscore',
  'ejs'
], function($, Backbone, _, EJS){
  return Backbone.View.extend({
    el: "#page_join",
    initialize: function(){
      _.bindAll(this, "join", "show");
    },
    events: {
      "click .btn_join": "join"
    },
    render: function(){

    },
    join: function(){
      var self = this;
      var name = this.$el.find(".ipt_name").val();
      var phone = this.$el.find(".ipt_phone").val();
      if(name=="" || phone==""){
        this.$el.find(".form_info").html("请正确输入正确的信息");
        return;
      }
      wx.ajax({
        data: {
          action: "playerJoin",
          name: name,
          phone: phone
        },
        success: function(d){
          if(d.state){
            var data = d.msg;
            wx.sid = data.sid;
            wx.pageShake.show();
          }else{
            self.$el.find(".form_info").html(d.msg);
          }
        }
      });
    },
    show: function(){
      var $oldPage = $(".page.active");
      var $newPage = this.$el;
      $newPage.css({
        marginLeft: $oldPage.width() + "px"
      }).addClass("active").animate({
        marginLeft: 0
      }, 400, "linear");
      $oldPage.animate({
        marginLeft: "-" + $oldPage.width() + "px"
      }, 400, "linear",function(){
        $oldPage.removeClass("active");
      });
    }

  });
});