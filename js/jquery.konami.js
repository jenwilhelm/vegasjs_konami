;(function( $ ) {

	$.fn.konami = function(options) {

		// Default options
    var settings = $.extend({ }, options );

    var keys = [];
    var konami = '38,38,40,40,37,39,37,39,66,65';

    $(window).keydown(function(e) {
    	keys.push( e.keyCode );
    	if ( keys.toString().indexOf( konami ) >= 0  ) {
    		// Konami code! Do something cool
    		$('#konami').html('<iframe width="420" height="315" src="https://www.youtube.com/embed/qqJ9Q2jXENU?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    	}
    });

	  return this;
	};

}( jQuery ));
