var app = app || {};

$(function($){
	app.AppView = Backbone.View.extend({
		el: '#app',

		events: {
            'submit #searchform': 'getMovies'
        },

		initialize: function(){
			this.$input = $('#query');

			this.listenTo(app.MovieCollection, 'reset', this.addAllToSearch);
			this.listenTo(app.MovieCollection, 'change:favorite', this.addOneToFavorite);
		},

		addOneToFavorite: function(movie) {
	        var newMovie = new app.Movie(movie.toJSON());
            newMovie.set({ ordinal: app.FavoriteCollection.nextOrdinal(), favorite: true });

            app.FavoriteCollection.create(newMovie);
	    },

        addOneToSearch: function (movie) {
			var view = new app.MovieListView({ model: movie });
			$('#searchlist').prepend(view.render().el);
		},

		addAllToSearch: function () {
			this.$('#searchlist').html('');
			app.MovieCollection.each(this.addOneToSearch, this);
		},

		newSearch: function(){
			return $.param({
                q: this.$input.val().trim()
            });
		},

		getMovies: function(e){
			e.preventDefault();
            app.MovieCollection.each(function(model) { model.destroy(); } )
            app.MovieCollection.fetch({ data: this.newSearch(), reset:true});
		}
	});
});