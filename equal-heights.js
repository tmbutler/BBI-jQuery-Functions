function equalHeight() {
	$(".js-equalheightgroup").each(function() {
		var maxHeight = -1;
		$(this).find(".js-equalheight").each(function() {
			maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
		});
		$(this).find(".js-equalheight").css({"min-height": maxHeight});
	});
}

$(document).ready(function(){
	equalHeight();

	$(window).resize(function() {
		equalHeight();
	});
});