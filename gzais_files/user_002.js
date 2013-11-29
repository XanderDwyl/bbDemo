/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'userModel'
], function ($, _, Backbone, JST, userModel) {
    'use strict';

  // Define our TodoView class
    var TodoView = Backbone.View.extend({

      tmpl: JST['app/scripts/templates/user.ejs'],
      tagName: 'li',
      className: 'entry',
      events: {
        'click .done': 'toggleDone'
      },

      render: function() {
        var _self = this;
        (_self.model.get('done')===true ? _self.$el.addClass('doneList') : _self.$el.removeClass('doneList'));

        _self.$el.html(_.template(_self.tmpl(_self.model.attributes)));

        return _self;
      },

      initialize: function() {
        var _self = this;
        _self.listenTo(_self.model, 'change', _self.render);
      },

      toggleDone: function(e) {
        this.model.set('done', !this.model.get('done'))
      }


    });

    // Define our AppView class ( this will bild the the existing div#app element )
    var AppView = Backbone.View.extend({

      el: $('#app'),

      initialize: function() {

        var _self = this;
        // setup element variables
        _self.inputText = _self.$el.find('.todo-input')[0];
        _self.todoList = _self.$el.find('.todoList')[0];
      },

      events: {
        'submit form': 'onSubmit'
      },
      onSubmit: function(e) {

        e.preventDefault();
        var _self = this;
        if (_self.inputText.value.trim() === '') {
          return false;
        }

        // TODO: create new model using the collection's create or add method
        var _todoText = _self.inputText.value.trim();
        var _todoView = new TodoView({
          model: new userModel({
            title: _todoText
          })
        });
        //
        $(_self.todoList).prepend(_todoView.render().el);

        _self.inputText.value = '';
        _self.inputText.focus();
      }

    });

    return AppView;
});