var app = app || {};

$(function($){
	app.FavoriteView = Backbone.View.extend({
		tagName: 'li',

		className: 'item-view',

		events: {
	        'drop' : 'drop',
	        'click .destroy': 'clear'
	    },

		template: Handlebars.compile( $("#item-view").html() ),

		initialize: function(){
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));

            return this;
		},

		drop: function(event, index){
			this.$el.trigger('update-sort', [this.model, index]);
		},

		clear: function(){
			this.model.destroy();
		}
	});
});