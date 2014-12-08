define([
    'jquery',
    'backbone',
    'underscore'
],function($, Backbone, _){
    return Backbone.Model.extend({
        defaults:{
            page:1,
            total:0,
            show: 5,
            currentItem: 0,
            totalItem: 0,
            perPage: 100
        }
    });
});