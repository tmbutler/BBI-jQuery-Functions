# BBI jQuery Demos #

## Scroll Links ##

Add a class="js-scroll" to any element that you need to scroll. Add data-scrollid="link" where link is the id of the element to scroll to.
	
	<ul>
		<li class="js-scroll" data-scrollid="analytics-events">Analytics Events</li>
		<li class="js-scroll" data-scrollid="equal-heights">Equal Heights</li>
		<li class="js-scroll" data-scrollid="date-input">Date Input</li>
		<li class="js-scroll" data-scrollid="numbers-only">Numbers Only Input</li>
		<li class="js-scroll" data-scrollid="number-stepper">Number Stepper Input</li>
		<li class="js-scroll" data-scrollid="form-validation">Form Validation</li>
	</ul>

## Analytics Events ##

Adding class="js-analytics-form" to a form will look for 3 inputs with the id's of eventcategory, eventaction and eventlabel. Their values will be submitted as a Google Analytics event.

	<form method="post" action="" class="js-analytics-form">

		<input type="text" name="eventcategory" id="eventcategory" value="Form" />
		<input type="text" name="eventaction" id="eventaction" value="Submitted" />
		<input type="text" name="eventlabel" id="eventlabel" value="Test Form 1" />
		<button type="submit">Submit</button>

	</form>

Adding class="js-analytics-event" to an element will look for 3 data attributes (data-eventcategory, data-eventaction and data-eventlabel). Their values will be submitted as a Google Analytics event.

	<a href="http://www.google.com" target="_blank" class="js-analyics-event" data-eventcategory="Link" data-eventaction="External" data-eventlabel="Google">Go to Google</a>


## Equal Heights ##

Add class="js-equalheightgroup" to a container/wrapper element, and class="js-equalheight" to any element that should have equal heights.

	<div class="js-equalheightgroup" style="display: flex;">

		<div class="js-equalheight" style="background-color: #f00; width: 200px;">Test</div>
		<div class="js-equalheight" style="background-color: #0f0; width: 200px;">Test<br>Test</div>
		<div class="js-equalheight" style="background-color: #00f; width: 200px;">Test<br>Test<br>Test</div>

	</div>

## Date Input ##

Add class="js-date-input" to make an input format automatically to DD/MM/YYYY.

	<input type="tel" name="date" class="js-date-input" value="" placeholder="DD/MM/YYYY" />

## Numbers Only Input ##

Add class="js-numbers-only" to force an input to only accept numbers.

	<input type="tel" name="number" class="js-numbers-only" value="" />

## Number Stepper Input ##

Add class="js-number-stepper" to the label or container element. Elements with class="js-stepper-minus" and class="js-stepper-plus" will control the input.

	<label class="js-number-stepper">
		<input data-maxvalue="5" name="stepper" type="tel" value="0" />
		<button class="js-stepper-minus">-</button>
		<button class="js-stepper-plus">+</button>
	</label>

## Form Validation ##

Add class="js-form" to any form to validate. Adding class="js-required" makes an input/select/textarea a required field. Adding data-regex="^xyz$"> will validate the input against a regular expression.

	<form method="post" action="" class="js-form">

		<label><input type="text" name="text" class="js-required" placeholder="Required Field" value="" /></label>
		<label><input type="email" name="email" class="js-required" placeholder="Email" value="" data-regex="^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$" /></label>
		<button type="submit">Submit</button>

	</form>
