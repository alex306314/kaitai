define([
  'jquery',
  'backbone',
  'underscore',
  'ejs'
], function($, Backbone, _, EJS){
  return Backbone.View.extend({
    el: "#page_join",
    initialize: function(){
      _.bindAll(this, "join");
    },
    events: {
      "click .btn_join": "join"
    },
    render: function(){

    },
    join: function(){
      var name = this.$el.find(".ipt_name").val();
      var phone = this.$el.find(".ipt_phone").val();
      if(name=="" || phone==""){
        this.$el.find(".form_info").html("请正确输入正确的信息");
        return;
      }

    }

  });
});