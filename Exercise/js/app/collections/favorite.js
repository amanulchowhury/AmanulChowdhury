var app = app || {};

(function(){
	var favList = Backbone.Collection.extend({
        model: app.Favorite,

        localStorage: new Backbone.LocalStorage('movies-favorite'),

        nextOrdinal: function () {
			if (!this.length) {
				return 0;
			}
			return this.last().get('ordinal') + 1;
		},

        comparator: function(movie){
            return movie.get('ordinal');
        }
    });

    app.FavoriteCollection = new favList();
}());