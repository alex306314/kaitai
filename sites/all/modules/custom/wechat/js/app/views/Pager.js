define([
    'jquery',
    'backbone',
    'underscore'
],function($, Backbone, _){
    return Backbone.View.extend({
        initialize: function(){
            _.bindAll(this, "generate", "pageClick", 'gotoPage');
            this.listenTo(this.model, "change", this.render);
        },
        render: function(){
            //this.generate();
        },
        events: {
            "click a": "pageClick"
        },
        pageClick: function(e){
            var $e = $(e.currentTarget);
            var $li = $e.parent();
            if($li.hasClass('disabled') || $li.hasClass('active')){
                return;
            }
            var page = parseInt($e.attr("data-page"));
            this.gotoPage(page);
        },
        gotoPage: function(page){

        },
        generate: function(){
            var page = this.model.get("page"),
                total = this.model.get("total"),
                show = this.model.get("show"),
                totalItem = this.model.get('totalItem'),
                currentItem = this.model.get('currentItem'),
                html = '<ul class="pagination">',
                test=1;

            var half = Math.floor(show/2);
            var start = page - half;
            var end = page + half;

            if(page == 1){
                html += '<li class="disabled"><a data-page="'+ (page-1) +'">&laquo;</a></li>';
            }else{
                html += '<li><a data-page="'+ (page-1) +'">&laquo;</a></li>';
            }

            if(start>1){
                html += '<li><a data-page="1">1</a></li>';
            }

            if(start > 2){
                html += '<li class="disabled dot"><a>...</a></li>';
            }

            for(var i=start; i<=end; i++){
                if(i == page){
                    html += '<li class="active"><a data-page="'+ i +'">'+ i +'</a></li>';
                }else{
                    if(i>0 && i<=total){
                        html += '<li><a data-page="'+ i +'">'+ i +'</a></li>';
                    }
                }
            }

            if(end<total-2){
                html += '<li class="disabled dot"><a>...</a></li>';
            }

            if(end<total){
                html += '<li><a data-page="'+(total-1)+'">'+ total + '</a></li>';
            }

            if(page >= total){
                html += '<li class="disabled"><a data-page="'+(page+1)+'">&raquo;</a></li>';
            }else{
                html += '<li><a data-page="'+(page+1)+'">&raquo;</a></li>';
            }

            html += '<li class="pdes disabled"><a style="cursor:text">当前页'+ currentItem + '条｜共'+ totalItem +'条</a></li>';
            html += '</ul>';
            return html;
        }
    });
});