requirejs.config({
    baseUrl: window.lib_url,
    urlArgs: "bust=" +  (new Date()).getTime(),
    paths: {
        app: '../app',
        views: '../app/views',
        collections: '../app/collections',
        models: '../app/models',
        jquery: 'jquery',
        text: 'requirejs/text',
        domReady: 'requirejs/domReady'
    },
    shim:{
        jquery: {
            exports: 'jQuery'
        },
        'underscore': {
            exports: '_'
        },
        backbone:{
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        ejs:{
            exports: 'EJS'
        },
        'bootstrap.min' : {
            deps: ['jquery'],
            exports: 'jQuery.fn.Bootstrap'
        },
        'jquery.form': {
            deps: ['jquery'],
            exports:'jQuery.fn.Form'
        },
        'jquery.validation':{
            deps:['jquery'],
            exports: 'jQuery.fn.validate'
        },
        'jquery-ui.min':{
            deps:['jquery'],
            exports: 'jQuery.fn.ui'
        }
    }
});