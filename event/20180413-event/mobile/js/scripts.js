$(document).ready(function() {
	$('#fullpage').fullpage({
		// sectionsColor: ['#0F2980', '#ffd200', '#c1c1c1'],
		anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourSection'],
		menu: '.main-nav ul',
		responsive: 642,
		scrollOverflow: false

	});
	 $.fn.fullpage.setMouseWheelScrolling(false);
	$.fn.fullpage.setAllowScrolling(false);
});