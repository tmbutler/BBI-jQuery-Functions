$(document).ready(function(){

	// DATE INPUT
	$('body').on('keypress', '.js-date-input', function(e) {
		if (e.which < 48 || e.which > 57) {
			e.preventDefault();
		}
	});

	$('body').on('keyup', '.js-date-input', function(e) {
		var keyCode = e.keyCode || e.which;
		if(keyCode !== 8 && keyCode !== 46 && keyCode !== 9) {
			var strokes = $(this).val().length;
			if(strokes === 2 || strokes === 5){
				var thisVal = $(this).val();
				thisVal += '/';
				$(this).val(thisVal);
			}
			else if(strokes >= 10){
				e.preventDefault();
			}
		}
	});
});