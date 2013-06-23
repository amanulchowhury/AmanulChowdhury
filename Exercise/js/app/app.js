var app = app || {};
$(function(){
	new app.AppView();

	$('.result-container').hover(function () {
        $(this).css({ 'overflow-y': 'auto', 'overflow-x': 'hidden' });
    },
        function () {
            $(this).css({ overflow: 'hidden' });
        });
});