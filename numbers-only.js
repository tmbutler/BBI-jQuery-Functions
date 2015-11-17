$(document).ready(function(){

	// NUMBERS ONLY
	$('.js-numbers-only').keyup(function () {
		this.value = this.value.replace(/[^0-9\.]/g,'');
	});

	$('body').on('blur', '.js-numbers-only', function() {
		if ($(this).val()==="") {
			$(this).val("0");
		}
		else {
			var maxvalue = parseInt($(this).data("maxvalue"),10);
			var inputvalue = parseInt($(this).val(),10);
			var val;
			if (inputvalue>=maxvalue) {
				if (maxvalue==11) {
					val = maxvalue.toString();
				}
				else {
					val = maxvalue.toString()+"+";
				}
				$(this).val(val);
			}
		}
	});
});