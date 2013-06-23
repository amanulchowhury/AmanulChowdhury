var app = app || {};

(function(){
	app.Movie = Backbone.Model.extend({
		defaults: {
			favorite: false
		}
	});
}());