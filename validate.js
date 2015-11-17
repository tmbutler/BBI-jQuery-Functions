$(document).ready(function(){

	var form = $(".js-form");

	//FORM VALIDATION ON BLUR
	form.on('blur', '.js-required', function(event) {
		if ($(this).val() === ""){
			$(this).parent().addClass('failedvalidation').removeClass('passedvalidation');
		}
		else {
			var regex = new RegExp($(this).data('regex'));
			var value = $(this).val();
			if (regex !== undefined) {
				if (regex.test(value) !== true) {
					$(this).parent().addClass('failedvalidation').removeClass('passedvalidation');
				}
				else {
					$(this).parent().removeClass('failedvalidation').addClass('passedvalidation');
				}
			}
			else {
				$(this).parent().removeClass('failedvalidation').addClass('passedvalidation');
			}
		}
	});

	//FORM VALIDATION ON SUBMIT
	form.submit(function(event){
		var passedvalidation = "true";

		var request;
		$(this).find(".js-required").each(function( index, element ) {
		if ($(this).val() === ""){
				$(this).parent().addClass('failedvalidation').removeClass('passedvalidation');
				passedvalidation = "false";
			}
			else {
				var regex = new RegExp($(this).data('regex'));
				var value = $(this).val();
				if (regex !== undefined) {
					if (regex.test(value) !== true) {
						$(this).parent().addClass('failedvalidation').removeClass('passedvalidation');
						passedvalidation = "false";
					}
					else {
						$(this).removeClass('failedvalidation').addClass('passedvalidation');
					}
				}
			}
		});
		if (passedvalidation == "false"){
			event.preventDefault ? event.preventDefault(event) : event.returnValue = false;
			alert ("Please complete all required fields.");
		}
		else if ($('.js-terms').length>0 && !$('.js-terms').is(':checked')) {
			event.preventDefault ? event.preventDefault(event) : event.returnValue = false;
			$('.js-terms').next().addClass('failedvalidation');
			alert ("Please accept the terms and conditions.");
		}
		else {
			ga('send', 'event', 'Form', 'Apply', 'Section 4');
		}
	});
});