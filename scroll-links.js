$(document).ready(function(){

	//SCROLL LINKS
	$('body').on('click', '.js-scroll', function(event) {
		event.preventDefault ? event.preventDefault(event) : event.returnValue = false;
		var scrollto = $(this).data('scrollid');
		if (scrollto==="top") {
			var scrolltop = 0;
		}
		else {
			var scrolltop = $("#"+scrollto).offset().top;
		}
		$(jQuery.browser.webkit ? "body": "html").animate({scrollTop: scrolltop}, 500);
	});
});