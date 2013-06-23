var app = app || {};

(function(){
	var searchList = Backbone.Collection.extend({
        
        model: app.Movie,

        url: 'http://search.guide.getglue.com/objects',
         
        parse: function(response){
            
            return response;
        }
    });

    app.MovieCollection = new searchList();
}());