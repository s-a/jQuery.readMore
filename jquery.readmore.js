/*!
* jQuery readMore plugin to display custom read more links in excerpts.
* By Stephan Ahlf,  (MIT Licensed)
*/  
(function( $ ){
	$.isOverflowed = function(e) {
		var
			h = e.scrollHeight - e.clientHeight,
			w = e.scrollWidth - e.clientWidth ;

			//console.log(e.scrollHeight,e.clientHeight,$(e).text());

			return (h>0 || w>0);
	};
	

	$.fn.readMore = function( options ) {


		var settings = $.extend( {
			'text'  : '...',
			'href'  : 'javascript:void(0);',
			'title' :''
		}, options);

		return this.each(function() {
			if ($.isOverflowed(this)){
				var
					_text = " " ;
					_readMoreLink = $('<a/>', {
						"class":'read__more__link'
					}),
					_href = ( typeof(settings.href) === "function" ? $.proxy(settings.href,this)() : settings.href );
				_readMoreLink.text(settings.text).attr('href', _href).attr('title', settings.title);

				$(this).append(_readMoreLink);

				while ( $.isOverflowed(this) && _text.length !== 0 ) {
					_readMoreLink.remove();
					_text = $.trim($(this).text());
					_text = _text.slice(0,_text.length-1);
					$(this).text(_text).append(_readMoreLink);
				}

			}
		});

	};
})( jQuery );