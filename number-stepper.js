$(document).ready(function(){

	// NUMBER STEPPER
	$('.js-number-stepper').on('mouseup touchend', '.js-stepper-plus', function() {

		var input = $(this).parent().find('input');
		var value = parseInt(input.val(),10);
		var maxvalue = parseInt(input.data('maxvalue'),10);

		if (value==="") {
			input.val(1);
		} else if(value>=maxvalue) {
			input.val(maxvalue);
		} else {
			input.val(value+1);
		}

		return false;

	});

	$('.js-number-stepper').on('mouseup touchend', '.js-stepper-minus', function() {

		var input = $(this).parent().find('input');
		var value = parseInt(input.val(),10);

		if (value<="0") {
			input.val(0);
		} else {
			input.val(value-1);
		}

		return false;

	});
});