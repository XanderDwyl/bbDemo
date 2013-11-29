/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        todoModel: 'models/user',
        todoView: 'views/user'
    }
});

require([
    'backbone', 'todoView', 'todoModel'
], function (Backbone, todoView, todoModel) {

    var _app = new todoView();  

    Backbone.history.start();

});
