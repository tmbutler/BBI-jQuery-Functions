$(document).ready(function(){

	//ANALYTICS EVENT TRACKING VIA LINKS
	$('body').on('click', '.js-analytics-event', function(event) {
		var eventcategory = $(this).data('eventcategory');
		var eventaction = $(this).data('eventaction');
		var eventlabel = $(this).data('eventlabel');
		ga('send', 'event', eventcategory, eventaction, eventlabel);
	});

	//ANALYTICS EVENT TRACKING VIA FORM SUBMISSION
	$(".js-analytics-form").submit(function(event){
		var eventcategory = $(this).find('#eventcategory');
		var eventaction = $(this).find('#eventaction');
		var eventlabel = $(this).find('#eventlabel');
		ga('send', 'event', eventcategory, eventaction, eventlabel);
	});
});