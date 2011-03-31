(function( $ ){
  $.fn.jsErrorHandler = function(options) {
  	
	var settings = {
		from: "support@position-absolute.com",
		website: document.domain
	}
	if (options) $.extend(settings, options);

 
    window.onerror = function (msg, url, line) {
	
		$.ajax({
			type:"GET",
			cache:false,
			url:"jserrorhandler.php",
			data: $.param({'message':msg, 'url': url, userAgent: navigator.userAgent, 'line': line, 'from':settings.from, 'website': settings.website}),
			success: function(test){
				if(window.console) console.log("Report sent about the javascript error")
			}
		})
	    return true;
	}
	

  };
})( jQuery );



