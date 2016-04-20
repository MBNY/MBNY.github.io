$(document).ready(function () {
	// console.logs the window.width - THIS SHOWS PIXEL WIDTH IN CONSOLE IN INSPECT
	$(window).resize(function () {
		console.log($(window).width());
	});

	$('#burger').click(function() {
		$('#mobile-nav').slideToggle();
	});


})


