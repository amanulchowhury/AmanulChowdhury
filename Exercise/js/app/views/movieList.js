var app= app || {};

$(function ($) { 
    'use strict';

    app.MovieListView = Backbone.View.extend({
        tagName: 'li',

        className: 'item-view',

        events: {
            'click .add-movie': 'makeFavorite'
        },

        template: Handlebars.compile( $("#item-view").html() ),

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        makeFavorite: function(){
            this.model.set({favorite: true});
        }
    });
});