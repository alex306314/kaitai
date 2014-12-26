define([
  'jquery',
  'backbone',
  'underscore',
  'ejs'
], function($, Backbone, _, EJS){
  return Backbone.View.extend({
    el: ".page_list_body",
    countInterval: -1,
    totalCount: window.COUNT_DOWN,
    counter: window.COUNT_DOWN-1, //计数器
    initialize: function(){
      _.bindAll(this, "countStart", "countAnimateStart", "generateCounter");
    },
    events: {
      "click .count_start": "countStart"
    },
    render: function(){

    },
    countStart: function(){
      if(this.countInterval!=-1){
        window.clearInterval(this.countInterval);
        this.countInterval=-1;
      }
      this.$el.find(".count_start").css({display:"none"});
      var html = this.generateCounter();
      this.$el.find(".count_down").append(html);
      this.countInterval = window.setInterval(this.countAnimateStart, 1000);
      //this.countAnimateStart();
    },
    generateCounter: function(){
      var html = "";
      var c=1;
      for(var i= this.totalCount; i>=1; i--){
        if(c==1){
          html += '<div class="num first num'+ i +'">'+ i +'</div>';
        }else{
          html += '<div class="num num'+ i +'">'+ i +'</div>';
        }
        c++
      }
      return html;
    },
    countAnimateStart: function(){
      var $old = this.$el.find(".num" + (this.counter+1));
      var $active = this.$el.find(".num" + this.counter);
      $active.css({display:"block"});
      if(!!$old[0]){
        $old.css({display:"block"}).animate({
          fontSize: "1500px",
          opacity: 0,
          marginLeft: "-50px"
        }, 500,"linear", function(){
          $old.remove();
        });
      }
      console.log(this.counter);
      if(this.counter<= 1){
        this.$el.find(".countdownw").addClass("hide");
        this.$el.find(".yylist").removeClass("hide");
        window.clearInterval(this.countInterval);
        this.countInterval=-1;
      }
      this.counter -- ;
    }

  });
});